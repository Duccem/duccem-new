import { CommandHandler } from '../../domain/CommandHandler';
import { Command } from '../../domain/Command';
export declare class CommandHandlers extends Map<Command, CommandHandler<Command>> {
    constructor(commandHandlers: Array<CommandHandler<Command>>);
    get(command: Command): CommandHandler<Command>;
}
//# sourceMappingURL=CommandHandlers.d.ts.map