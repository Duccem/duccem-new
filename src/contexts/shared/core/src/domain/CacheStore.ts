import { Nullable } from './Types/Nullable';

export interface CacheStore {
  setElement(key: string, payload: any, time: number): Promise<boolean>;
  getElement(key: string): Promise<Nullable<any>>;
  delete(key: string): Promise<boolean>;
  getCacheData(key: string, transaction: Promise<any>, expireIn?: number): Promise<Nullable<any>>;
}
