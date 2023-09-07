import { Nullable } from '../../domain/Types/Nullable';
import { CacheStore } from '../../domain/CacheStore';
import { RedisClientType } from 'redis';
export declare class RedisCacheStore implements CacheStore {
    private readonly client;
    constructor(client: RedisClientType);
    setElement(key: string, payload: any, time: number): Promise<boolean>;
    getElement(key: string): Promise<Nullable<any>>;
    delete(key: string): Promise<boolean>;
    getCacheData(key: string, transaction: Promise<any>, expireIn?: number): Promise<any>;
}
//# sourceMappingURL=RedisCacheStore.d.ts.map