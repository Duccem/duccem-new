import { Aggregate } from '../Aggregate';
import { Response } from '../Response';
export type Pagination = {
    limit: number;
    offset: number;
    total: number;
};
export declare class PaginatedResponse extends Response {
    readonly data: Array<Aggregate>;
    readonly pagination: Pagination;
    constructor(message: string, data: Array<Aggregate>, pagination: Pagination);
    formatResponse(): {
        code: number;
        message: string;
        data: any[];
        pagination: Pagination;
    };
}
//# sourceMappingURL=PaginatedResponse.d.ts.map