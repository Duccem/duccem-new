"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFilters = exports.AndFilters = exports.OrFilters = exports.Filters = void 0;
const Filter_1 = require("./Filter");
class Filters {
    constructor(filters) {
        this.filters = filters;
    }
    static fromValues(filters) {
        return new Filters(filters.map(Filter_1.Filter.fromValues));
    }
    static none() {
        return new Filters([]);
    }
}
exports.Filters = Filters;
class OrFilters extends Filters {
}
exports.OrFilters = OrFilters;
class AndFilters extends Filters {
}
exports.AndFilters = AndFilters;
class NotFilters extends Filters {
}
exports.NotFilters = NotFilters;
//# sourceMappingURL=Filters.js.map