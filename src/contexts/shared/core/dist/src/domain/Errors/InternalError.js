"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalError = void 0;
const Error_1 = require("../Error");
class InternalError extends Error_1.Error {
    constructor(message) {
        super(message, 500);
    }
}
exports.InternalError = InternalError;
//# sourceMappingURL=InternalError.js.map