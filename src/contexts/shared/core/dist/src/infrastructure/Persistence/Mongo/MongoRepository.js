"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRepository = void 0;
const MongoCriteriaConverter_1 = require("./MongoCriteriaConverter");
class MongoRepository {
    constructor(connection, cache, entity) {
        this.connection = connection;
        this.cache = cache;
        this.entity = entity;
        this.converter = new MongoCriteriaConverter_1.MongoCriteriaConverter();
    }
    get collection() {
        return this.connection.db().collection(this.model);
    }
    get model() {
        return this.entity.name.toLowerCase();
    }
    subModel(other) {
        return this.connection.db().collection(other.name.toLowerCase());
    }
    async searchByCriteria(criteria) {
        const { filter, limit, skip, sort } = this.converter.Criteria(criteria);
        const results = await this.collection.find(filter).sort(sort).skip(skip).limit(limit).toArray();
        return results.map((result) => new this.entity(result));
    }
    async persist(id, aggregate) {
        await this.collection.updateOne({ id }, { $set: aggregate.toPrimitives() }, { upsert: true });
    }
}
exports.MongoRepository = MongoRepository;
//# sourceMappingURL=MongoRepository.js.map