"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationError = void 0;
const Error_1 = require("../Error");
class AuthorizationError extends Error_1.Error {
    constructor(message) {
        super(message, 401);
    }
}
exports.AuthorizationError = AuthorizationError;
//# sourceMappingURL=AuthorizationError.js.map