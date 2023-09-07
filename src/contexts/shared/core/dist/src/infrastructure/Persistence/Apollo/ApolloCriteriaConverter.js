"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApolloCriteriaConverter = void 0;
const client_1 = require("@apollo/client");
const capitalize_1 = __importDefault(require("capitalize"));
const pluralize_1 = __importDefault(require("pluralize"));
class ApolloCriteriaConverter {
    Query(model, fields, criteria) {
        const filters = this.Filters(criteria?.filters);
        const project = this.Project(fields);
        const order = criteria?.order?.orderType?.value || 'ASC';
        const orderBy = criteria?.order?.orderBy?.value || 'id';
        const offset = criteria?.paginator?.offset?.value || 0;
        const limit = criteria?.paginator?.limit?.value || 50;
        const query = `
      query ${(0, pluralize_1.default)(model)}($params: QueryParameters) {
        ${(0, pluralize_1.default)(model)}(params: $params) {
          ${project}
        }
      }
    `;
        return {
            query: (0, client_1.gql)(query),
            variables: {
                filters,
                order,
                orderBy,
                limit,
                offset,
            },
        };
    }
    Get(id, model, fields) {
        const project = this.Project(fields);
        const query = `
      query ${model}($id: string) {
        ${model}s(params: $id) {
          ${project}
        }
      }
    `;
        return {
            query: (0, client_1.gql)(query),
            variables: {
                id,
            },
        };
    }
    Filters(filters) {
        return filters?.filters.map((filter) => ({
            field: filter.field.value,
            value: filter.value.value,
            operator: filter.operator.value,
        }));
    }
    Project(fields) {
        return fields?.join(',');
    }
    Mutation(model, data) {
        const mutation = `
      mutation persist${(0, capitalize_1.default)(model)}($data: ${(0, capitalize_1.default)(model)}) {
        persist${(0, capitalize_1.default)(model)}(data: $data) {}
      }
    `;
        return {
            mutation: (0, client_1.gql)(mutation),
            variables: data,
        };
    }
    Delete(model) {
        const mutation = `
      mutation delete${(0, capitalize_1.default)(model)}($id: String) {
        delete${(0, capitalize_1.default)(model)}(id: $id) {}
      }
    `;
        return {
            mutation: (0, client_1.gql)(mutation),
        };
    }
    count(model, criteria) {
        const filters = this.Filters(criteria?.filters);
        const query = `
      query count${(0, capitalize_1.default)((0, pluralize_1.default)(model))}($params: CountParameters) {
        count${(0, capitalize_1.default)((0, pluralize_1.default)(model))}(params: $params) {
          count
        }
      }
    `;
        return {
            query: (0, client_1.gql)(query),
            variables: {
                filters,
            },
        };
    }
    exist(model) {
        const query = `
      query exist${(0, capitalize_1.default)(model)}($id: String) {
        exist${(0, capitalize_1.default)(model)}(id: $id) {
        }
      }
    `;
        return {
            query: (0, client_1.gql)(query),
        };
    }
    search(model, text, fields) {
        const project = this.Project(fields);
        const query = `
      query search${(0, capitalize_1.default)((0, pluralize_1.default)(model))}($text: String) {
        search${(0, capitalize_1.default)((0, pluralize_1.default)(model))}(text: $text) {
          ${project}
        }
      }
    `;
        return {
            query: (0, client_1.gql)(query),
            variables: {
                text,
            },
        };
    }
}
exports.ApolloCriteriaConverter = ApolloCriteriaConverter;
//# sourceMappingURL=ApolloCriteriaConverter.js.map