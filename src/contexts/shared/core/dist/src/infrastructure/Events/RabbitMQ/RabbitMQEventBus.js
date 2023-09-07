"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQEventBus = void 0;
const DomainEventDeserializer_1 = require("../DomainEventDeserializer");
const RabbitMQConsumer_1 = require("./RabbitMQConsumer");
const RabbitMQFormatter_1 = require("./RabbitMQFormatter");
class RabbitMQEventBus {
    constructor(failOverPublisher, connection) {
        this.failOverPublisher = failOverPublisher;
        this.connection = connection;
        this.exchange = 'ducen_events';
    }
    async configure(subscribers) {
        const retryExchange = RabbitMQFormatter_1.RabbitMQFormatter.formatExchangeRetryName(this.exchange);
        const deadLetterExchange = RabbitMQFormatter_1.RabbitMQFormatter.formatExchangeDeadLetterName(this.exchange);
        await this.connection.exchange(this.exchange);
        await this.connection.exchange(retryExchange);
        await this.connection.exchange(deadLetterExchange);
        for (const subscriber of subscribers) {
            await this.addQueue(subscriber, this.exchange);
        }
    }
    async addQueue(subscriber, exchange) {
        const retryExchange = RabbitMQFormatter_1.RabbitMQFormatter.formatExchangeRetryName(exchange);
        const deadLetterExchange = RabbitMQFormatter_1.RabbitMQFormatter.formatExchangeDeadLetterName(exchange);
        const routingKeys = RabbitMQFormatter_1.RabbitMQFormatter.getRoutingKeysFor(subscriber);
        const queue = RabbitMQFormatter_1.RabbitMQFormatter.formatQueue(subscriber);
        const deadLetterQueue = RabbitMQFormatter_1.RabbitMQFormatter.formatQueueDeadLetter(subscriber);
        const retryQueue = RabbitMQFormatter_1.RabbitMQFormatter.formatQueueRetry(subscriber);
        await this.connection.queue(exchange, queue, routingKeys);
        await this.connection.queue(retryExchange, retryQueue, [queue], exchange, queue, 1000);
        await this.connection.queue(deadLetterExchange, deadLetterQueue, [queue]);
    }
    async addSubscribers(subscribers) {
        await this.configure(subscribers);
        this.deserializer = DomainEventDeserializer_1.DomainEventDeserializer.configure(subscribers);
        for (const subscriber of subscribers) {
            const queueName = RabbitMQFormatter_1.RabbitMQFormatter.formatQueue(subscriber);
            const consumer = new RabbitMQConsumer_1.RabbitMQConsumer(subscriber, this.connection, this.deserializer, queueName, this.exchange, 1000);
            await this.connection.consume(queueName, consumer.onMessage.bind(consumer));
        }
    }
    async publish(events) {
        for (const event of events) {
            try {
                const routingKey = event.eventName;
                const content = RabbitMQFormatter_1.RabbitMQFormatter.toBuffer(event);
                const options = RabbitMQFormatter_1.RabbitMQFormatter.eventOptions(event);
                await this.connection.publish(this.exchange, routingKey, content, options);
                await this.failOverPublisher.publish(event, true);
            }
            catch (error) {
                await this.failOverPublisher.publish(event, false);
            }
        }
    }
}
exports.RabbitMQEventBus = RabbitMQEventBus;
//# sourceMappingURL=RabbitMQEventBus.js.map