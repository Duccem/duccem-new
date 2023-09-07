"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Latitude = void 0;
const FormatError_1 = require("../../Errors/FormatError");
const NumberValueObject_1 = require("../primitives/NumberValueObject");
class Latitude extends NumberValueObject_1.NumberValueObject {
    validation(value) {
        super.validation(value);
        if (value > 90 && value < -90) {
            throw new FormatError_1.FormatError('Latitude out of boundaries');
        }
    }
}
exports.Latitude = Latitude;
//# sourceMappingURL=Latitude.js.map