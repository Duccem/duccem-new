import { Query } from '../../domain/Query';
import { QueryHandler } from '../../domain/QueryHandler';
export declare class QueryHandlers extends Map<Query, QueryHandler<Query>> {
    constructor(queryHandlers: Array<QueryHandler<Query>>);
    get(query: Query): QueryHandler<Query>;
}
//# sourceMappingURL=QueryHandlers.d.ts.map