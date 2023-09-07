"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterOperator = exports.Operator = void 0;
const Enum_1 = require("src/domain/ValueObjects/generics/Enum");
var Operator;
(function (Operator) {
    Operator["EQUAL"] = "=";
    Operator["NOT_EQUAL"] = "!=";
    Operator["GT"] = ">";
    Operator["LT"] = "<";
    Operator["CONTAINS"] = "CONTAINS";
    Operator["NOT_CONTAINS"] = "NOT_CONTAINS";
})(Operator || (exports.Operator = Operator = {}));
class FilterOperator extends Enum_1.Enum {
    constructor(value) {
        super(value, Object.values(Operator));
    }
    static fromValue(value) {
        switch (value) {
            case Operator.EQUAL:
                return new FilterOperator(Operator.EQUAL);
            case Operator.NOT_EQUAL:
                return new FilterOperator(Operator.NOT_EQUAL);
            case Operator.GT:
                return new FilterOperator(Operator.GT);
            case Operator.LT:
                return new FilterOperator(Operator.LT);
            case Operator.CONTAINS:
                return new FilterOperator(Operator.CONTAINS);
            case Operator.NOT_CONTAINS:
                return new FilterOperator(Operator.NOT_CONTAINS);
            default:
                throw new Error(`The filter operator ${value} is invalid`);
        }
    }
    isPositive() {
        return this.value !== Operator.NOT_EQUAL && this.value !== Operator.NOT_CONTAINS;
    }
    static equal() {
        return this.fromValue(Operator.EQUAL);
    }
    toString() {
        return this.value;
    }
}
exports.FilterOperator = FilterOperator;
//# sourceMappingURL=FilterOperator.js.map