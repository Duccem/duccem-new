import { Query } from '../../domain/Query';
import { QueryBus } from '../../domain/QueryBus';
import { QueryHandlers } from './QueryHandlers';
export declare class InMemoryQueryBus implements QueryBus {
    private queryHandlersInformation;
    constructor(queryHandlersInformation: QueryHandlers);
    ask(query: Query): Promise<any>;
}
//# sourceMappingURL=InMemoryQueryBus.d.ts.map