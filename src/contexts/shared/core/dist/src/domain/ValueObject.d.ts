export declare abstract class ValueObject<T> {
    value: T;
    constructor(value: T);
    equals(other: ValueObject<T>): boolean;
    protected abstract validation(value: T): void;
    abstract toString(): string;
}
//# sourceMappingURL=ValueObject.d.ts.map