import { ValueObject } from '../../ValueObject';
export declare class NumberValueObject extends ValueObject<number> {
    validation(value: number): void;
    getValue(): number;
    toString(): string;
    static zero(): NumberValueObject;
}
//# sourceMappingURL=NumberValueObject.d.ts.map