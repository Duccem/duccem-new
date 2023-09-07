"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderType = exports.OrderTypes = void 0;
const Enum_1 = require("../../ValueObjects/generics/Enum");
var OrderTypes;
(function (OrderTypes) {
    OrderTypes["ASC"] = "asc";
    OrderTypes["DESC"] = "desc";
    OrderTypes["NONE"] = "none";
})(OrderTypes || (exports.OrderTypes = OrderTypes = {}));
class OrderType extends Enum_1.Enum {
    constructor(value) {
        super(value, Object.values(OrderTypes));
    }
    static fromValue(value) {
        switch (value) {
            case OrderTypes.ASC:
                return new OrderType(OrderTypes.ASC);
            case OrderTypes.DESC:
                return new OrderType(OrderTypes.DESC);
            default:
                throw new Error(`The order type ${value} is invalid`);
        }
    }
    isNone() {
        return this.value === OrderTypes.NONE;
    }
    isAsc() {
        return this.value === OrderTypes.ASC;
    }
    toString() {
        return this.value;
    }
}
exports.OrderType = OrderType;
//# sourceMappingURL=OrderType.js.map