"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsError = void 0;
const Error_1 = require("../Error");
class PermissionsError extends Error_1.Error {
    constructor(message) {
        super(message, 403);
    }
}
exports.PermissionsError = PermissionsError;
//# sourceMappingURL=PermissionsError.js.map