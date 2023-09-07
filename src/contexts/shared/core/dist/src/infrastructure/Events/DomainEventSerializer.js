"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEventSerializer = void 0;
class DomainEventSerializer {
    static serialize(event) {
        return JSON.stringify({
            data: {
                id: event.eventId,
                type: event.eventName,
                occurred_on: event.occurredOn.toISOString(),
                aggregateId: event.aggregateId,
                attributes: event.toPrimitive(),
            },
        });
    }
}
exports.DomainEventSerializer = DomainEventSerializer;
//# sourceMappingURL=DomainEventSerializer.js.map