import { Response } from '../Response';
export declare class NullResponse extends Response {
    constructor(message: string);
    formatResponse(): {
        code: number;
        message: string;
    };
}
//# sourceMappingURL=NullResponse.d.ts.map