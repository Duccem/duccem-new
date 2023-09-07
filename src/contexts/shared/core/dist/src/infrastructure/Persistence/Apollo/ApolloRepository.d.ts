import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { Aggregate } from '../../../domain/Aggregate';
import { Criteria } from '../../../domain/Criteria/Criteria';
import { EntityConstructor } from '../../../domain/Types/EntityConstructor';
import { ApolloCriteriaConverter } from './ApolloCriteriaConverter';
export declare class ApolloRepository<T extends Aggregate> {
    protected client: ApolloClient<NormalizedCacheObject>;
    private entity;
    protected converter: ApolloCriteriaConverter;
    constructor(client: ApolloClient<NormalizedCacheObject>, entity: EntityConstructor<T>);
    protected get model(): string;
    protected searchByCriteria(criteria?: Criteria): Promise<T[]>;
    persist(id: string, data: T): Promise<void>;
}
//# sourceMappingURL=ApolloRepository.d.ts.map