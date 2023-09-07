import { DomainEvent } from '../../../domain/DomainEvent';
import { EventBus } from '../../../domain/DomainEventBus';
import { DomainEventSubscriber } from '../../../domain/DomainEventSubscriber';
import { DomainEventFailOverPublisher } from '../DomainEventFailOverPublisher';
export declare class InMemoryEventBus implements EventBus {
    private failOverPublisher;
    private channel;
    private deserializer?;
    constructor(failOverPublisher: DomainEventFailOverPublisher);
    configure(subscribers: DomainEventSubscriber[]): Promise<void>;
    publish(events: DomainEvent[]): Promise<void>;
    addSubscribers(subscribers: DomainEventSubscriber[]): void;
    registerSubscriber(subscriber: DomainEventSubscriber): void;
}
//# sourceMappingURL=InMemoryEventBus.d.ts.map