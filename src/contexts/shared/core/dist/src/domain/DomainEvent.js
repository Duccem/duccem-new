"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEvent = void 0;
class DomainEvent {
    constructor(eventName, aggregateId, eventId, occurredOn) {
        this.aggregateId = aggregateId;
        this.eventId = eventId;
        this.occurredOn = occurredOn || new Date();
        this.eventName = eventName;
    }
}
exports.DomainEvent = DomainEvent;
//# sourceMappingURL=DomainEvent.js.map