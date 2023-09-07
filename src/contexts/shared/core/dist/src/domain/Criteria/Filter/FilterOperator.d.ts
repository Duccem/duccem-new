import { Enum } from 'src/domain/ValueObjects/generics/Enum';
export declare enum Operator {
    EQUAL = "=",
    NOT_EQUAL = "!=",
    GT = ">",
    LT = "<",
    CONTAINS = "CONTAINS",
    NOT_CONTAINS = "NOT_CONTAINS"
}
export declare class FilterOperator extends Enum<Operator> {
    constructor(value: Operator);
    static fromValue(value: string): FilterOperator;
    isPositive(): boolean;
    static equal(): FilterOperator;
    toString(): string;
}
//# sourceMappingURL=FilterOperator.d.ts.map