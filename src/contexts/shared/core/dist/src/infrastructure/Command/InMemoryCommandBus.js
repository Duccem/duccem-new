"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryCommandBus = void 0;
class InMemoryCommandBus {
    constructor(commandHandlers) {
        this.commandHandlers = commandHandlers;
    }
    async dispatch(command) {
        const handler = this.commandHandlers.get(command);
        await handler.handle(command);
    }
}
exports.InMemoryCommandBus = InMemoryCommandBus;
//# sourceMappingURL=InMemoryCommandBus.js.map