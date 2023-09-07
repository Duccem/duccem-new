import { Collection, MongoClient } from 'mongodb';
import { Aggregate } from '../../../domain/Aggregate';
import { CacheStore } from '../../../domain/CacheStore';
import { Criteria } from '../../../domain/Criteria/Criteria';
import { Entity } from '../../../domain/Entity';
import { EntityConstructor } from '../../../domain/Types/EntityConstructor';
import { MongoCriteriaConverter } from './MongoCriteriaConverter';
export declare abstract class MongoRepository<T extends Aggregate> {
    protected connection: MongoClient;
    protected cache: CacheStore;
    protected entity: EntityConstructor<T>;
    protected converter: MongoCriteriaConverter;
    constructor(connection: MongoClient, cache: CacheStore, entity: EntityConstructor<T>);
    protected get collection(): Collection;
    protected get model(): string;
    protected subModel<O extends Entity>(other: EntityConstructor<O>): Collection<import("bson").Document>;
    protected searchByCriteria(criteria: Criteria): Promise<T[]>;
    protected persist(id: string, aggregate: T): Promise<void>;
}
//# sourceMappingURL=MongoRepository.d.ts.map