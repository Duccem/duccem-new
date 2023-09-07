import { ConsumeMessage } from 'amqplib';
import { DomainEventSubscriber } from '../../../domain/DomainEventSubscriber';
import { DomainEventDeserializer } from '../DomainEventDeserializer';
import { RabbitMQConnection } from './RabbitMQConnection';
export declare class RabbitMQConsumer {
    private subscriber;
    private deserializer;
    private connection;
    private maxRetries;
    private queueName;
    private exchange;
    constructor(subscriber: DomainEventSubscriber, connection: RabbitMQConnection, deserializer: DomainEventDeserializer, queue: string, exchange: string, retries: number);
    onMessage(message: ConsumeMessage): Promise<void>;
    private handleError;
    private retry;
    private deadLetter;
    private hasBeenRedeliveredTooMuch;
    private hasBeenRedelivered;
}
//# sourceMappingURL=RabbitMQConsumer.d.ts.map