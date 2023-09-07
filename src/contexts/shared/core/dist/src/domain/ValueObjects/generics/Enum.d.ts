import { ValueObject } from '../../ValueObject';
export declare class Enum<T> extends ValueObject<T> {
    readonly validValues: T[];
    constructor(value: T, validValues: T[]);
    validation(value: T): void;
    getValue(): T;
    toString(): string;
}
//# sourceMappingURL=Enum.d.ts.map