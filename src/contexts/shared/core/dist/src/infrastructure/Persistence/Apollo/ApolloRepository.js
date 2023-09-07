"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApolloRepository = void 0;
const pluralize_1 = __importDefault(require("pluralize"));
const ApolloCriteriaConverter_1 = require("./ApolloCriteriaConverter");
class ApolloRepository {
    constructor(client, entity) {
        this.client = client;
        this.entity = entity;
        this.converter = new ApolloCriteriaConverter_1.ApolloCriteriaConverter();
    }
    get model() {
        return this.entity.name.toLowerCase();
    }
    async searchByCriteria(criteria) {
        const { query, variables } = this.converter.Query(this.model, ['_id'], criteria);
        const result = await this.client.query({ query, variables });
        const elements = result.data[(0, pluralize_1.default)(this.model)];
        return elements.map((element) => new this.entity(element));
    }
    async persist(id, data) {
        const { mutation, variables } = this.converter.Mutation(this.model, { ...data, id });
        await this.client.mutate({ mutation, variables });
    }
}
exports.ApolloRepository = ApolloRepository;
//# sourceMappingURL=ApolloRepository.js.map