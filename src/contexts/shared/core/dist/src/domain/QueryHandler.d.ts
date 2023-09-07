import { Query } from './Query';
export interface QueryHandler<Q extends Query> {
    subscribedTo(): Query;
    handle(query: Q): Promise<any>;
}
//# sourceMappingURL=QueryHandler.d.ts.map