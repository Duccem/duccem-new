"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisCacheStore = void 0;
class RedisCacheStore {
    constructor(client) {
        this.client = client;
    }
    async setElement(key, payload, time) {
        const payloadStringify = JSON.stringify(payload);
        const result = await this.client.setEx(key, time, payloadStringify);
        return result ? true : false;
    }
    async getElement(key) {
        const stringVal = await this.client.get(key);
        if (!stringVal)
            return null;
        const parsedVal = JSON.parse(stringVal);
        return parsedVal;
    }
    async delete(key) {
        const result = await this.client.del(key);
        return result ? true : false;
    }
    async getCacheData(key, transaction, expireIn = 60 * 60) {
        let response;
        try {
            response = await this.getElement(key);
        }
        catch (error) {
            return await transaction;
        }
        if (!response) {
            response = await transaction;
            await this.setElement(key, response, expireIn);
        }
        return response;
    }
}
exports.RedisCacheStore = RedisCacheStore;
//# sourceMappingURL=RedisCacheStore.js.map