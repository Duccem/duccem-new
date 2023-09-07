import { Command } from './Command';
export interface CommandBus {
    dispatch(command: Command): Promise<void>;
}
//# sourceMappingURL=CommandBus.d.ts.map