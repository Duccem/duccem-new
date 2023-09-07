import { Limit } from './Limit';
import { Offset } from './Offset';
export declare class Paginator {
    readonly limit: Limit;
    readonly offset: Offset;
    constructor(limit: Limit, offset: Offset);
    static fromValues(limit?: number, offset?: number): Paginator;
    static none(): Paginator;
}
//# sourceMappingURL=Paginator.d.ts.map