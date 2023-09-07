"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
class ValueObject {
    constructor(value) {
        this.validation(value);
        this.value = value;
    }
    equals(other) {
        return other.constructor.name === this.constructor.name && other.value === this.value;
    }
}
exports.ValueObject = ValueObject;
//# sourceMappingURL=ValueObject.js.map