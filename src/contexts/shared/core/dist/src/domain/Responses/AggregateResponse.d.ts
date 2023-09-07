import { Aggregate } from '../Aggregate';
import { Response } from '../Response';
export declare class AggregateResponse extends Response {
    readonly data: Aggregate;
    constructor(message: string, data: Aggregate);
    formatResponse(): {
        code: number;
        message: string;
        data: any;
    };
}
//# sourceMappingURL=AggregateResponse.d.ts.map