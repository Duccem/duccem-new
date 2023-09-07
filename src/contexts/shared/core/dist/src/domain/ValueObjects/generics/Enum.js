"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum = void 0;
const FormatError_1 = require("../../Errors/FormatError");
const ValueObject_1 = require("../../ValueObject");
class Enum extends ValueObject_1.ValueObject {
    constructor(value, validValues) {
        super(value);
        this.validValues = validValues;
    }
    validation(value) {
        if (!this.validValues.includes(value)) {
            throw new FormatError_1.FormatError(`<${this.constructor.name}> does not allow the value <${value}>`);
        }
    }
    getValue() {
        return this.value;
    }
    toString() {
        return this.value.toString();
    }
}
exports.Enum = Enum;
//# sourceMappingURL=Enum.js.map