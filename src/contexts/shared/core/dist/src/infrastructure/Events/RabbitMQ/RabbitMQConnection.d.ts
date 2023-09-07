/// <reference types="node" />
import { ConfirmChannel, ConsumeMessage } from 'amqplib';
export declare class RabbitMQConnection {
    private channel?;
    constructor(channel: ConfirmChannel);
    exchange(name: string): Promise<import("amqplib").Replies.AssertExchange>;
    queue(exchange: string, name: string, routingKeys: string[], dlExchange?: string, dlQueue?: string, messageTtl?: number): Promise<void>;
    publish(exchange: string, routingKey: string, content: Buffer, options: any): Promise<void>;
    consume(queue: string, onMessage: (message: ConsumeMessage) => void): Promise<void>;
    ack(message: ConsumeMessage): Promise<void>;
    retry(message: ConsumeMessage, queue: string, exchange: string): Promise<void>;
    deadLetter(message: ConsumeMessage, queue: string, exchange: string): Promise<void>;
    private getMessageOptions;
    private incrementRedeliveryCount;
    private hasBeenRedelivered;
}
//# sourceMappingURL=RabbitMQConnection.d.ts.map