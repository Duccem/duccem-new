"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Criteria = void 0;
const Filters_1 = require("./Filter/Filters");
const Order_1 = require("./Order/Order");
const Paginator_1 = require("./Paginator/Paginator");
class Criteria {
    constructor(filters, order, paginator) {
        this.filters = filters;
        this.order = order;
        this.paginator = paginator;
    }
    hasFilter() {
        return this.filters.filters.length > 0;
    }
    hasPaginator() {
        return this.paginator ? true : false;
    }
    getPaginator(count) {
        return {
            limit: this.paginator.limit.value,
            offset: this.paginator.offset.value,
            total: count,
        };
    }
    static fromValues(filters, orderBy, order, limit, offset) {
        const query = {
            filters: Criteria.parseFilters(filters),
            orderBy,
            order,
            limit: limit ? Number(limit) : undefined,
            offset: offset ? Number(offset) : undefined,
        };
        return new Criteria(Filters_1.Filters.fromValues(query.filters), Order_1.Order.fromValues(query.orderBy, query.order), Paginator_1.Paginator.fromValues(query.limit, query.offset));
    }
    static parseFilters(params) {
        if (!params) {
            return new Array();
        }
        return params.map((filter) => {
            const field = filter.field;
            const value = filter.value;
            const operator = filter.operator;
            return new Map([
                ['field', field],
                ['operator', operator],
                ['value', value],
            ]);
        });
    }
}
exports.Criteria = Criteria;
//# sourceMappingURL=Criteria.js.map