/// <reference types="node" />
import { DomainEvent } from '../../../domain/DomainEvent';
import { DomainEventSubscriber } from '../../../domain/DomainEventSubscriber';
export declare class RabbitMQFormatter {
    static formatQueueArguments(params: {
        deadLetterExchange?: string;
        deadLetterQueue?: string;
        messageTtl?: number;
    }): any;
    static formatExchangeRetryName(exchange: string): string;
    static formatExchangeDeadLetterName(exchange: string): string;
    static formatQueue(subscriber: DomainEventSubscriber): string;
    static formatQueueRetry(subscriber: DomainEventSubscriber): string;
    static formatQueueDeadLetter(subscriber: DomainEventSubscriber): string;
    static eventOptions(event: DomainEvent): {
        messageId: string;
        contentType: string;
        contentEncoding: string;
    };
    static toBuffer(event: DomainEvent): Buffer;
    static getRoutingKeysFor(subscriber: DomainEventSubscriber): string[];
}
//# sourceMappingURL=RabbitMQFormatter.d.ts.map