"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQConnection = void 0;
const RabbitMQFormatter_1 = require("./RabbitMQFormatter");
class RabbitMQConnection {
    constructor(channel) {
        this.channel = channel;
    }
    async exchange(name) {
        return await this.channel?.assertExchange(name, 'topic', { durable: true });
    }
    async queue(exchange, name, routingKeys, dlExchange, dlQueue, messageTtl) {
        const args = RabbitMQFormatter_1.RabbitMQFormatter.formatQueueArguments({
            deadLetterExchange: dlExchange,
            deadLetterQueue: dlQueue,
            messageTtl,
        });
        await this.channel?.assertQueue(name, {
            exclusive: false,
            durable: true,
            autoDelete: false,
            arguments: args,
        });
        for (const routingKey of routingKeys) {
            await this.channel?.bindQueue(name, exchange, routingKey);
        }
    }
    async publish(exchange, routingKey, content, options) {
        return new Promise((resolve, reject) => {
            this.channel?.publish(exchange, routingKey, content, options, (error) => (error ? reject(error) : resolve()));
        });
    }
    async consume(queue, onMessage) {
        await this.channel?.consume(queue, (message) => {
            if (!message) {
                return;
            }
            onMessage(message);
        });
    }
    async ack(message) {
        this.channel?.ack(message);
    }
    async retry(message, queue, exchange) {
        const retryExchange = RabbitMQFormatter_1.RabbitMQFormatter.formatExchangeRetryName(exchange);
        const options = this.getMessageOptions(message);
        return await this.publish(retryExchange, queue, message.content, options);
    }
    async deadLetter(message, queue, exchange) {
        const deadLetterExchange = RabbitMQFormatter_1.RabbitMQFormatter.formatExchangeDeadLetterName(exchange);
        const options = this.getMessageOptions(message);
        return await this.publish(deadLetterExchange, queue, message.content, options);
    }
    getMessageOptions(message) {
        const { messageId, contentType, contentEncoding, priority } = message.properties;
        const options = {
            messageId,
            headers: this.incrementRedeliveryCount(message),
            contentType,
            contentEncoding,
            priority,
        };
        return options;
    }
    incrementRedeliveryCount(message) {
        if (this.hasBeenRedelivered(message)) {
            const count = parseInt(message.properties.headers['redelivery_count']);
            message.properties.headers['redelivery_count'] = count + 1;
        }
        else {
            message.properties.headers['redelivery_count'] = 1;
        }
        return message.properties.headers;
    }
    hasBeenRedelivered(message) {
        return message.properties.headers['redelivery_count'] !== undefined;
    }
}
exports.RabbitMQConnection = RabbitMQConnection;
//# sourceMappingURL=RabbitMQConnection.js.map