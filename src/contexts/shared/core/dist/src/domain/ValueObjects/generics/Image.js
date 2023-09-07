"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const StringValueObject_1 = require("../primitives/StringValueObject");
class Image extends StringValueObject_1.StringValueObject {
    async toBase64(data) {
        const buffer = Buffer.from(data, 'binary');
        const base64 = buffer.toString('base64');
        return base64;
    }
}
exports.Image = Image;
//# sourceMappingURL=Image.js.map