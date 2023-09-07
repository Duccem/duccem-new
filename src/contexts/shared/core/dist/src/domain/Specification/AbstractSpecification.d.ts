import { CompositeSpecification } from './CompositeSpecification';
export declare abstract class AbstractSpecification<T> implements CompositeSpecification<T> {
    abstract isSatisfiedBy(candidate: T): boolean;
    and(other: CompositeSpecification<T>): CompositeSpecification<T>;
    not(): CompositeSpecification<T>;
    or(other: CompositeSpecification<T>): CompositeSpecification<T>;
}
//# sourceMappingURL=AbstractSpecification.d.ts.map