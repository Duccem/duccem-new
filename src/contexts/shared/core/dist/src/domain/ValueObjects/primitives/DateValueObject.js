"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateValueObject = void 0;
const date_fns_1 = require("date-fns");
const date_fns_tz_1 = require("date-fns-tz");
const ValueObject_1 = require("../../ValueObject");
const FormatError_1 = require("../../Errors/FormatError");
class DateValueObject extends ValueObject_1.ValueObject {
    constructor(value, timezone) {
        super(typeof value === 'string' && !value.includes('-') ? new Date(Number(value)) : new Date(value));
        this.timezone = timezone;
    }
    validation(value) {
        if (!(0, date_fns_1.isValid)(new Date(value)))
            throw new FormatError_1.FormatError('The format of the date is not correct');
    }
    toUTC() {
        return (0, date_fns_tz_1.zonedTimeToUtc)(this.value, this.timezone || process.env['GLOBAL_TIMEZONE'] || '');
    }
    toTimeZone() {
        return (0, date_fns_tz_1.utcToZonedTime)(this.value, this.timezone || process.env['GLOBAL_TIMEZONE'] || '');
    }
    getValue() {
        return this.value;
    }
    addDays(days) {
        return new DateValueObject((0, date_fns_1.addDays)(this.value, days));
    }
    restDays(days) {
        return new DateValueObject((0, date_fns_1.subDays)(this.value, days));
    }
    static today() {
        return new DateValueObject(new Date());
    }
    toString() {
        return this.value.toString();
    }
}
exports.DateValueObject = DateValueObject;
//# sourceMappingURL=DateValueObject.js.map