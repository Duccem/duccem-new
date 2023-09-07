"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryEventBus = void 0;
const events_1 = __importDefault(require("events"));
const DomainEventDeserializer_1 = require("../DomainEventDeserializer");
const DomainEventSerializer_1 = require("../DomainEventSerializer");
class InMemoryEventBus {
    constructor(failOverPublisher) {
        this.failOverPublisher = failOverPublisher;
        this.channel = new events_1.default();
    }
    async configure(subscribers) {
        subscribers.map((sub) => console.log(sub.constructor.name));
    }
    async publish(events) {
        for (const event of events) {
            try {
                this.channel.emit(event.eventName, DomainEventSerializer_1.DomainEventSerializer.serialize(event));
                await this.failOverPublisher.publish(event, true);
            }
            catch (error) {
                await this.failOverPublisher.publish(event, false);
            }
        }
    }
    addSubscribers(subscribers) {
        if (!subscribers)
            return;
        this.deserializer = DomainEventDeserializer_1.DomainEventDeserializer.configure(subscribers);
        this.failOverPublisher.setDeserializer(this.deserializer);
        subscribers.map((subscriber) => this.registerSubscriber(subscriber));
    }
    registerSubscriber(subscriber) {
        subscriber.subscribedTo().map((event) => {
            this.channel.on(event.EVENT_NAME, (msg) => {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                subscriber.on(this.deserializer.deserialize(msg));
            });
        });
    }
}
exports.InMemoryEventBus = InMemoryEventBus;
//# sourceMappingURL=InMemoryEventBus.js.map