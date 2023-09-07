"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQConsumer = void 0;
class RabbitMQConsumer {
    constructor(subscriber, connection, deserializer, queue, exchange, retries) {
        this.subscriber = subscriber;
        this.connection = connection;
        this.deserializer = deserializer;
        this.queueName = queue;
        this.exchange = exchange;
        this.maxRetries = retries;
    }
    async onMessage(message) {
        const content = message.content.toString();
        const domainEvent = this.deserializer.deserialize(content);
        try {
            await this.subscriber.on(domainEvent);
        }
        catch (error) {
            await this.handleError(message);
        }
        finally {
            this.connection.ack(message);
        }
    }
    async handleError(message) {
        if (this.hasBeenRedeliveredTooMuch(message)) {
            await this.deadLetter(message);
        }
        else {
            await this.retry(message);
        }
    }
    async retry(message) {
        await this.connection.retry(message, this.queueName, this.exchange);
    }
    async deadLetter(message) {
        await this.connection.deadLetter(message, this.queueName, this.exchange);
    }
    hasBeenRedeliveredTooMuch(message) {
        if (this.hasBeenRedelivered(message)) {
            const count = parseInt(message.properties.headers['redelivery_count']);
            return count >= this.maxRetries;
        }
        return false;
    }
    hasBeenRedelivered(message) {
        return message.properties.headers['redelivery_count'] !== undefined;
    }
}
exports.RabbitMQConsumer = RabbitMQConsumer;
//# sourceMappingURL=RabbitMQConsumer.js.map