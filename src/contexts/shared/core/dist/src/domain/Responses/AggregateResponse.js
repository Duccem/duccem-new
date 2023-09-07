"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateResponse = void 0;
const Response_1 = require("../Response");
class AggregateResponse extends Response_1.Response {
    constructor(message, data) {
        super(message, 200);
        this.data = data;
    }
    formatResponse() {
        return {
            code: this.code,
            message: this.message,
            data: this.data.toPrimitives(),
        };
    }
}
exports.AggregateResponse = AggregateResponse;
//# sourceMappingURL=AggregateResponse.js.map