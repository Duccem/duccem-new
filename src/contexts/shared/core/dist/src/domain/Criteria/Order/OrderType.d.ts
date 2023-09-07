import { Enum } from '../../ValueObjects/generics/Enum';
export declare enum OrderTypes {
    ASC = "asc",
    DESC = "desc",
    NONE = "none"
}
export declare class OrderType extends Enum<OrderTypes> {
    constructor(value: OrderTypes);
    static fromValue(value: string): OrderType;
    isNone(): boolean;
    isAsc(): boolean;
    toString(): string;
}
//# sourceMappingURL=OrderType.d.ts.map