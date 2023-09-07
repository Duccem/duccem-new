"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullResponse = void 0;
const Response_1 = require("../Response");
class NullResponse extends Response_1.Response {
    constructor(message) {
        super(message, 201);
    }
    formatResponse() {
        return {
            code: this.code,
            message: this.message,
        };
    }
}
exports.NullResponse = NullResponse;
//# sourceMappingURL=NullResponse.js.map