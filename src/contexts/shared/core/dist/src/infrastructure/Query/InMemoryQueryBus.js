"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryQueryBus = void 0;
class InMemoryQueryBus {
    constructor(queryHandlersInformation) {
        this.queryHandlersInformation = queryHandlersInformation;
    }
    async ask(query) {
        const handler = this.queryHandlersInformation.get(query);
        const response = await handler.handle(query);
        return response;
    }
}
exports.InMemoryQueryBus = InMemoryQueryBus;
//# sourceMappingURL=InMemoryQueryBus.js.map