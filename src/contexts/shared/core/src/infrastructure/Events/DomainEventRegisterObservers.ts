import { Inject, Injectable } from '@nestjs/common';
import { DomainEventSubscriber } from '../../domain/DomainEventSubscriber';
import type { EventBus } from '../../domain/DomainEventBus';

export class DomainEventRegisterObservers {
  constructor(
    private eventBus: EventBus,
    private subscribers: Array<DomainEventSubscriber>,
  ) {
    this.eventBus.addSubscribers(this.subscribers);
  }
}
