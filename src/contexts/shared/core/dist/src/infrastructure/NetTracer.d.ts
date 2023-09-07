import { Request, Response } from 'express';
import { Logger } from '../domain/Logger';
export declare class NetTracer {
    private static method;
    private static httpVersion;
    private static url;
    private static ip;
    private static status;
    private static responseTime;
    private static lengthResponse;
    static Request(request: Request, logger: Logger): void;
    static Response(request: Request, response: Response, logger: Logger): void;
}
//# sourceMappingURL=NetTracer.d.ts.map