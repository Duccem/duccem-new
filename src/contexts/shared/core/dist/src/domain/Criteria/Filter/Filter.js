"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
const FilterField_1 = require("./FilterField");
const FilterOperator_1 = require("./FilterOperator");
const FilterValue_1 = require("./FilterValue");
class Filter {
    constructor(field, operator, value) {
        this.field = field;
        this.operator = operator;
        this.value = value;
    }
    static fromValues(values) {
        const field = values.get('field');
        const operator = values.get('operator');
        const value = values.get('value');
        if (!field || !operator || !value) {
            throw new Error(`The filter is invalid`);
        }
        return new Filter(new FilterField_1.FilterField(field), FilterOperator_1.FilterOperator.fromValue(operator), new FilterValue_1.FilterValue(value));
    }
}
exports.Filter = Filter;
//# sourceMappingURL=Filter.js.map