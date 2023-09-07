import { DomainEventClass } from '../../domain/DomainEvent';
import { DomainEventSubscriber } from '../../domain/DomainEventSubscriber';
export declare class DomainEventDeserializer extends Map<string, DomainEventClass> {
    static configure(subscribers: DomainEventSubscriber[]): DomainEventDeserializer;
    private registerEvent;
    deserialize(event: string): import("../../domain/DomainEvent").DomainEvent;
}
//# sourceMappingURL=DomainEventDeserializer.d.ts.map