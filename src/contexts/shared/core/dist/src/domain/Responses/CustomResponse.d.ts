import { Response } from '../Response';
export declare class CustomResponse extends Response {
    readonly data: any;
    constructor(message: string, data: any);
    formatResponse(): {
        code: number;
        message: string;
        data: any;
    };
}
//# sourceMappingURL=CustomResponse.d.ts.map