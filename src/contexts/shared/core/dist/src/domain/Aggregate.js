"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aggregate = void 0;
const Entity_1 = require("./Entity");
class Aggregate extends Entity_1.Entity {
    constructor(data) {
        super(data);
        this.domainEvents = [];
    }
    pullDomainEvents() {
        return this.domainEvents;
    }
    record(event) {
        this.domainEvents.push(event);
    }
}
exports.Aggregate = Aggregate;
//# sourceMappingURL=Aggregate.js.map