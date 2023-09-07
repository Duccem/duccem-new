"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const FormatError_1 = require("../../Errors/FormatError");
const StringValueObject_1 = require("../primitives/StringValueObject");
class Email extends StringValueObject_1.StringValueObject {
    validation(value) {
        super.validation(value);
        const rex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (rex.test(value))
            return;
        else
            throw new FormatError_1.FormatError('El email no tiene el formato correcto');
    }
}
exports.Email = Email;
//# sourceMappingURL=Email.js.map