/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Collection, MongoClient } from 'mongodb';
import { Aggregate } from '../../../domain/Aggregate';
import { CacheStore } from '../../../domain/CacheStore';
import { Criteria } from '../../../domain/Criteria/Criteria';
import { EntityConstructor } from '../../../domain/Types/EntityConstructor';
import { Primitives } from '../../../domain/Types/Primitives';
import { MongoCriteriaConverter } from './MongoCriteriaConverter';
export abstract class MongoRepository<T extends Aggregate> {
  protected converter: MongoCriteriaConverter = new MongoCriteriaConverter();
  constructor(
    protected connection: MongoClient,
    protected cache: CacheStore,
    protected entity: EntityConstructor<T>,
  ) {}
  protected get collection(): Collection {
    return this.connection.db()!.collection(this.model);
  }
  protected get model() {
    return this.entity.name.toLowerCase();
  }

  protected subModel<O extends Aggregate>(other: EntityConstructor<O>) {
    return this.connection.db()!.collection(other.name.toLowerCase());
  }

  protected async searchByCriteria(criteria: Criteria): Promise<T[]> {
    const { filter, limit, skip, sort } = this.converter.Criteria(criteria);
    const results = await this.collection.find<Primitives<T>>(filter).sort(sort).skip(skip).limit(limit).toArray();
    return results.map((result) => new this.entity(result));
  }

  protected async persist(id: string, aggregate: T): Promise<void> {
    await this.collection.updateOne({ id }, { $set: aggregate.toPrimitives() }, { upsert: true });
  }
}
