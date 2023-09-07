import { DomainEventSubscriber } from '../../domain/DomainEventSubscriber';
import type { EventBus } from '../../domain/DomainEventBus';
export declare class DomainEventRegisterObservers {
    private eventBus;
    private subscribers;
    constructor(eventBus: EventBus, subscribers: Array<DomainEventSubscriber>);
}
//# sourceMappingURL=DomainEventRegisterObservers.d.ts.map