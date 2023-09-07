"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uuid = void 0;
const FormatError_1 = require("../../Errors/FormatError");
const StringValueObject_1 = require("../primitives/StringValueObject");
const uuid_1 = require("uuid");
class Uuid extends StringValueObject_1.StringValueObject {
    constructor(value) {
        super(value);
    }
    static random() {
        return new Uuid((0, uuid_1.v4)());
    }
    static validateID(id) {
        if (!(0, uuid_1.validate)(id))
            return false;
        return true;
    }
    validation(id) {
        super.validation(id);
        if (!(0, uuid_1.validate)(id)) {
            throw new FormatError_1.FormatError(`<${Uuid.name}> does not allow the value <${id}>`);
        }
    }
    toString() {
        return this.value.toString();
    }
}
exports.Uuid = Uuid;
//# sourceMappingURL=Uuid.js.map