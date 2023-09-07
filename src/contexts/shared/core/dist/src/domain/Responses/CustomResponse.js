"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomResponse = void 0;
const Response_1 = require("../Response");
class CustomResponse extends Response_1.Response {
    constructor(message, data) {
        super(message, 200);
        this.data = data;
    }
    formatResponse() {
        return {
            code: this.code,
            message: this.message,
            data: this.data,
        };
    }
}
exports.CustomResponse = CustomResponse;
//# sourceMappingURL=CustomResponse.js.map