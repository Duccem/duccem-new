import { Nullable } from '../../domain/Types/Nullable';
import { CacheStore } from '../../domain/CacheStore';
import { RedisClientType } from 'redis';

export class RedisCacheStore implements CacheStore {
  constructor(private readonly client: RedisClientType) {}
  async setElement(key: string, payload: any, time: number): Promise<boolean> {
    const payloadStringify = JSON.stringify(payload);

    const result = await this.client.setEx(key, time, payloadStringify);
    return result ? true : false;
  }

  async getElement(key: string): Promise<Nullable<any>> {
    const stringVal = await this.client.get(key);
    if (!stringVal) return null;
    const parsedVal = JSON.parse(stringVal);
    return parsedVal;
  }

  async delete(key: string): Promise<boolean> {
    const result = await this.client.del(key);
    return result ? true : false;
  }

  async getCacheData(key: string, transaction: Promise<any>, expireIn = 60 * 60) {
    let response: any;
    try {
      response = await this.getElement(key);
    } catch (error) {
      return await transaction;
    }
    if (!response) {
      response = await transaction;
      await this.setElement(key, response, expireIn);
    }
    return response;
  }
}
