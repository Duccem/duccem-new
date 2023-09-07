import { DomainEvent } from './DomainEvent';
import { Entity } from './Entity';
export declare abstract class Aggregate extends Entity {
    private domainEvents;
    constructor(data: any);
    pullDomainEvents(): Array<DomainEvent>;
    record(event: DomainEvent): void;
}
//# sourceMappingURL=Aggregate.d.ts.map