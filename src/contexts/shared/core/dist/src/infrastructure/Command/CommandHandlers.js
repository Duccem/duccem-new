"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandlers = void 0;
const InternalError_1 = require("../../domain/Errors/InternalError");
class CommandHandlers extends Map {
    constructor(commandHandlers) {
        super();
        commandHandlers.forEach((commandHandler) => {
            this.set(commandHandler.subscribedTo(), commandHandler);
        });
    }
    get(command) {
        const commandHandler = super.get(command.constructor);
        if (!commandHandler) {
            throw new InternalError_1.InternalError(`The command <${command.constructor.name}> hasn't a command handler associated`);
        }
        return commandHandler;
    }
}
exports.CommandHandlers = CommandHandlers;
//# sourceMappingURL=CommandHandlers.js.map