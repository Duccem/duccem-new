import { DomainEvent } from './DomainEvent';
import { Entity } from './Entity';

export abstract class Aggregate extends Entity {
  private domainEvents: Array<DomainEvent>;
  constructor(data: any) {
    super(data);
    this.domainEvents = [];
  }

  public pullDomainEvents(): Array<DomainEvent> {
    return this.domainEvents;
  }

  public record(event: DomainEvent): void {
    this.domainEvents.push(event);
  }
}
