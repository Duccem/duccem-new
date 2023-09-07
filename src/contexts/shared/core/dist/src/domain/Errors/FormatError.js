"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatError = void 0;
const Error_1 = require("../Error");
class FormatError extends Error_1.Error {
    constructor(message) {
        super(message, 400);
    }
}
exports.FormatError = FormatError;
//# sourceMappingURL=FormatError.js.map