"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEventFailOverPublisher = void 0;
const DomainEventSerializer_1 = require("./DomainEventSerializer");
class DomainEventFailOverPublisher {
    constructor(connection) {
        this.connection = connection;
    }
    get collection() {
        return this.connection.db()?.collection(DomainEventFailOverPublisher.collectionName);
    }
    setDeserializer(deserializer) {
        this.deserializer = deserializer;
    }
    async publish(event, published) {
        const eventSerialized = DomainEventSerializer_1.DomainEventSerializer.serialize(event);
        const options = { upsert: true };
        const update = { $set: { eventId: event.eventId, event: eventSerialized, published: published } };
        await this.collection?.updateOne({ eventId: event.eventId }, update, options);
    }
    async consume() {
        const results = await this.collection?.find().limit(200).toArray();
        const events = results?.map((document) => this.deserializer?.deserialize(document.event));
        return events?.filter(Boolean);
    }
}
exports.DomainEventFailOverPublisher = DomainEventFailOverPublisher;
DomainEventFailOverPublisher.collectionName = 'event';
//# sourceMappingURL=DomainEventFailOverPublisher.js.map