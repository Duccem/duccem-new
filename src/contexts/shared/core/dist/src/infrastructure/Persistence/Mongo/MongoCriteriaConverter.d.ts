import { Criteria } from '../../../domain/Criteria/Criteria';
import { Filters } from '../../../domain/Criteria/Filter/Filters';
import { Order } from '../../../domain/Criteria/Order/Order';
type MongoFilterOperator = '$eq' | '$ne' | '$gt' | '$lt' | '$regex' | '$in' | '$nin';
type MongoFilterValue = boolean | string | number | any;
type MongoFilterOperation = {
    [operator in MongoFilterOperator]?: MongoFilterValue;
};
type MongoFilter = {
    [field: string]: MongoFilterOperation;
} | {
    [field: string]: {
        $not: MongoFilterOperation;
    } | MongoFilter[];
};
type MongoDirection = 1 | -1;
type MongoSort = {
    [field: string]: MongoDirection;
};
interface MongoQuery {
    filter: MongoFilter;
    sort: MongoSort;
    skip: number;
    limit: number;
}
export declare class MongoCriteriaConverter {
    private filterTransformers;
    constructor();
    Criteria(criteria?: Criteria): MongoQuery;
    protected Filter(filters: Filters): MongoFilter;
    protected generateSort(order: Order): MongoSort;
    private equalFilter;
    private notEqualFilter;
    private greaterThanFilter;
    private lowerThanFilter;
    private containsFilter;
    private notContainsFilter;
}
export {};
//# sourceMappingURL=MongoCriteriaConverter.d.ts.map