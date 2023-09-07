"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQFormatter = void 0;
const DomainEventSerializer_1 = require("../DomainEventSerializer");
class RabbitMQFormatter {
    static formatQueueArguments(params) {
        let args = {};
        if (params.deadLetterExchange) {
            args = { ...args, 'x-dead-letter-exchange': params.deadLetterExchange };
        }
        if (params.deadLetterQueue) {
            args = { ...args, 'x-dead-letter-routing-key': params.deadLetterQueue };
        }
        if (params.messageTtl) {
            args = { ...args, 'x-message-ttl': params.messageTtl };
        }
        return args;
    }
    static formatExchangeRetryName(exchange) {
        return `retry_${exchange}`;
    }
    static formatExchangeDeadLetterName(exchange) {
        return `dead_letter_${exchange}`;
    }
    static formatQueue(subscriber) {
        const value = subscriber.constructor.name;
        const name = value
            .split(/(?=[A-Z])/)
            .join('_')
            .toLowerCase();
        return `test.${name}`;
    }
    static formatQueueRetry(subscriber) {
        const name = this.formatQueue(subscriber);
        return `retry.${name}`;
    }
    static formatQueueDeadLetter(subscriber) {
        const name = this.formatQueue(subscriber);
        return `dead_letter.${name}`;
    }
    static eventOptions(event) {
        return {
            messageId: event.eventId,
            contentType: 'application/json',
            contentEncoding: 'utf-8',
        };
    }
    static toBuffer(event) {
        const eventPrimitives = DomainEventSerializer_1.DomainEventSerializer.serialize(event);
        return Buffer.from(eventPrimitives);
    }
    static getRoutingKeysFor(subscriber) {
        const routingKeys = subscriber.subscribedTo().map((event) => event.EVENT_NAME);
        const queue = this.formatQueue(subscriber);
        routingKeys.push(queue);
        return routingKeys;
    }
}
exports.RabbitMQFormatter = RabbitMQFormatter;
//# sourceMappingURL=RabbitMQFormatter.js.map