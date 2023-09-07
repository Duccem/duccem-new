"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedResponse = void 0;
const Aggregate_1 = require("../Aggregate");
const Response_1 = require("../Response");
class PaginatedResponse extends Response_1.Response {
    constructor(message, data, pagination) {
        super(message, 200);
        this.data = data;
        this.pagination = pagination;
    }
    formatResponse() {
        return {
            code: this.code,
            message: this.message,
            data: Aggregate_1.Aggregate.toArray(this.data),
            pagination: this.pagination,
        };
    }
}
exports.PaginatedResponse = PaginatedResponse;
//# sourceMappingURL=PaginatedResponse.js.map