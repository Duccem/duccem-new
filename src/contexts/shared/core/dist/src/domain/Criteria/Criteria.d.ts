import { Filters } from './Filter/Filters';
import { Order } from './Order/Order';
import { Paginator } from './Paginator/Paginator';
export type FilterType = {
    value: string;
    operator: string;
    field: string;
};
export declare class Criteria {
    readonly filters: Filters;
    readonly order: Order;
    readonly paginator: Paginator;
    constructor(filters: Filters, order: Order, paginator: Paginator);
    hasFilter(): boolean;
    hasPaginator(): boolean;
    getPaginator(count: number): {
        limit: number;
        offset: number;
        total: number;
    };
    static fromValues(filters: Array<FilterType>, orderBy: string, order: string, limit: string, offset: string): Criteria;
    static parseFilters(params: Array<FilterType>): Array<Map<string, string>>;
}
//# sourceMappingURL=Criteria.d.ts.map