import { Filter } from './Filter';
export declare class Filters {
    readonly filters: Filter[];
    constructor(filters: Filter[]);
    static fromValues(filters: Array<Map<string, string>>): Filters;
    static none(): Filters;
}
export declare class OrFilters extends Filters {
}
export declare class AndFilters extends Filters {
}
export declare class NotFilters extends Filters {
}
//# sourceMappingURL=Filters.d.ts.map