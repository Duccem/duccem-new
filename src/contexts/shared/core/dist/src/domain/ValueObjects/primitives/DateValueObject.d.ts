import { ValueObject } from '../../ValueObject';
export declare class DateValueObject extends ValueObject<Date> {
    private readonly timezone?;
    constructor(value: string | number | Date, timezone?: string);
    validation(value: Date): void;
    toUTC(): Date;
    toTimeZone(): Date;
    getValue(): Date;
    addDays(days: number): DateValueObject;
    restDays(days: number): DateValueObject;
    static today(): DateValueObject;
    toString(): string;
}
//# sourceMappingURL=DateValueObject.d.ts.map