"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const Error_1 = require("../Error");
class NotFoundError extends Error_1.Error {
    constructor(message) {
        super(message, 404);
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=NotFoundError.js.map