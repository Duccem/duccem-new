"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
class Error {
    constructor(message, code) {
        this.message = message;
        this.code = code;
        this.timestamp = new Date().toISOString();
    }
    getCode() {
        return this.code;
    }
    getMessage() {
        return this.message;
    }
}
exports.Error = Error;
//# sourceMappingURL=Error.js.map