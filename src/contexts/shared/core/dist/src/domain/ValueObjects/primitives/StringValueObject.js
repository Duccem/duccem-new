"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringValueObject = void 0;
const FormatError_1 = require("../../Errors/FormatError");
const ValueObject_1 = require("../../ValueObject");
class StringValueObject extends ValueObject_1.ValueObject {
    validation(value) {
        if (value === null || value === undefined) {
            throw new FormatError_1.FormatError('Value string must be defined');
        }
    }
    toString() {
        return this.value;
    }
    static Empty() {
        return new StringValueObject('');
    }
}
exports.StringValueObject = StringValueObject;
//# sourceMappingURL=StringValueObject.js.map