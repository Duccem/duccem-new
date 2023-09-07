"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
class Response {
    constructor(message, code) {
        this.message = message;
        this.code = code;
    }
    getCode() {
        return this.code;
    }
    getMessage() {
        return this.message;
    }
}
exports.Response = Response;
//# sourceMappingURL=Response.js.map