export declare abstract class DomainEvent {
    static EVENT_NAME: string;
    static fromPrimitives: (...args: unknown[]) => DomainEvent;
    readonly aggregateId: string;
    readonly eventId: string;
    readonly occurredOn: Date;
    readonly eventName: string;
    constructor(eventName: string, aggregateId: string, eventId?: string, occurredOn?: Date);
    abstract toPrimitive(): any;
}
export type DomainEventClass = {
    EVENT_NAME: string;
    fromPrimitives(...args: unknown[]): DomainEvent;
};
//# sourceMappingURL=DomainEvent.d.ts.map