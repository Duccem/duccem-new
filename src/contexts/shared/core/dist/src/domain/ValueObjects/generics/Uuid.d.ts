import { StringValueObject } from '../primitives/StringValueObject';
export declare class Uuid extends StringValueObject {
    constructor(value: string);
    static random(): Uuid;
    static validateID(id: string): boolean;
    protected validation(id: string): void;
    toString(): string;
}
//# sourceMappingURL=Uuid.d.ts.map