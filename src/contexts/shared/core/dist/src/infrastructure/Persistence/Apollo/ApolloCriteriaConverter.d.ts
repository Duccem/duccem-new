import { Criteria } from '../../../domain/Criteria/Criteria';
import { Filters } from '../../../domain/Criteria/Filter/Filters';
export declare class ApolloCriteriaConverter {
    Query(model: string, fields?: string[], criteria?: Criteria): {
        query: import("@apollo/client").DocumentNode;
        variables: {
            filters: {
                field: string;
                value: string;
                operator: import("../../../..").Operator;
            }[];
            order: string;
            orderBy: string;
            limit: number;
            offset: number;
        };
    };
    Get(id: string, model: string, fields: string[]): {
        query: import("@apollo/client").DocumentNode;
        variables: {
            id: string;
        };
    };
    Filters(filters?: Filters): {
        field: string;
        value: string;
        operator: import("../../../..").Operator;
    }[];
    Project(fields?: string[]): string;
    Mutation(model: string, data: any): {
        mutation: import("@apollo/client").DocumentNode;
        variables: any;
    };
    Delete(model: string): {
        mutation: import("@apollo/client").DocumentNode;
    };
    count(model: string, criteria?: Criteria): {
        query: import("@apollo/client").DocumentNode;
        variables: {
            filters: {
                field: string;
                value: string;
                operator: import("../../../..").Operator;
            }[];
        };
    };
    exist(model: string): {
        query: import("@apollo/client").DocumentNode;
    };
    search(model: string, text: string, fields: string[]): {
        query: import("@apollo/client").DocumentNode;
        variables: {
            text: string;
        };
    };
}
//# sourceMappingURL=ApolloCriteriaConverter.d.ts.map