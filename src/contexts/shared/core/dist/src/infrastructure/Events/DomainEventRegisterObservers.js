"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEventRegisterObservers = void 0;
class DomainEventRegisterObservers {
    constructor(eventBus, subscribers) {
        this.eventBus = eventBus;
        this.subscribers = subscribers;
        this.eventBus.addSubscribers(this.subscribers);
    }
}
exports.DomainEventRegisterObservers = DomainEventRegisterObservers;
//# sourceMappingURL=DomainEventRegisterObservers.js.map