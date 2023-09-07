"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Longitude = void 0;
const FormatError_1 = require("../../Errors/FormatError");
const NumberValueObject_1 = require("../primitives/NumberValueObject");
class Longitude extends NumberValueObject_1.NumberValueObject {
    validate(value) {
        super.validation(value);
        if (value > 180 && value < -180) {
            throw new FormatError_1.FormatError('Longitude out of boundaries');
        }
    }
}
exports.Longitude = Longitude;
//# sourceMappingURL=Longitude.js.map