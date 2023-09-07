"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberValueObject = void 0;
const FormatError_1 = require("../../Errors/FormatError");
const ValueObject_1 = require("../../ValueObject");
class NumberValueObject extends ValueObject_1.ValueObject {
    validation(value) {
        if (value === null || value === undefined) {
            throw new FormatError_1.FormatError('Value number must be defined');
        }
    }
    getValue() {
        return this.value;
    }
    toString() {
        return this.value.toString();
    }
    static zero() {
        return new NumberValueObject(0);
    }
}
exports.NumberValueObject = NumberValueObject;
//# sourceMappingURL=NumberValueObject.js.map