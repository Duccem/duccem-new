import { Logger } from '../domain/Logger';
export declare class CustomLogger extends Logger {
    log(message: any): void;
    error(message: any, stack?: string): void;
    warn(message: any): void;
    debug(message: any): void;
    verbose(message: any): void;
    request(message: any): void;
    response(message: any): void;
    private writeLog;
    private color;
    private date;
    private print;
    private sanitize;
}
//# sourceMappingURL=CustomLogger.d.ts.map