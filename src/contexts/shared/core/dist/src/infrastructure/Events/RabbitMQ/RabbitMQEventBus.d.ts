import { DomainEvent } from '../../../domain/DomainEvent';
import { EventBus } from '../../../domain/DomainEventBus';
import { DomainEventSubscriber } from '../../../domain/DomainEventSubscriber';
import { DomainEventFailOverPublisher } from '../DomainEventFailOverPublisher';
import { RabbitMQConnection } from './RabbitMQConnection';
export declare class RabbitMQEventBus implements EventBus {
    private failOverPublisher;
    private connection;
    private deserializer?;
    private exchange;
    constructor(failOverPublisher: DomainEventFailOverPublisher, connection: RabbitMQConnection);
    configure(subscribers: Array<DomainEventSubscriber>): Promise<void>;
    private addQueue;
    addSubscribers(subscribers: DomainEventSubscriber[]): Promise<void>;
    publish(events: DomainEvent[]): Promise<void>;
}
//# sourceMappingURL=RabbitMQEventBus.d.ts.map