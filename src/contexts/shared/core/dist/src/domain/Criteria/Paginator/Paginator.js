"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paginator = void 0;
const Limit_1 = require("./Limit");
const Offset_1 = require("./Offset");
class Paginator {
    constructor(limit, offset) {
        this.limit = limit;
        this.offset = offset;
    }
    static fromValues(limit, offset) {
        if (!limit && !offset) {
            return Paginator.none();
        }
        return new Paginator(new Limit_1.Limit(limit || 50), new Offset_1.Offset(offset || 0));
    }
    static none() {
        return new Paginator(new Limit_1.Limit(1), new Offset_1.Offset(0));
    }
}
exports.Paginator = Paginator;
//# sourceMappingURL=Paginator.js.map