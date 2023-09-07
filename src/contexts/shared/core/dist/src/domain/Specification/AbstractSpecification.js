"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSpecification = void 0;
class AbstractSpecification {
    and(other) {
        return new AndSpecification(this, other);
    }
    not() {
        return new NotSpecification(this);
    }
    or(other) {
        return new OrSpecification(this, other);
    }
}
exports.AbstractSpecification = AbstractSpecification;
class AndSpecification extends AbstractSpecification {
    constructor(one, other) {
        super();
        this.one = one;
        this.other = other;
    }
    isSatisfiedBy(candidate) {
        return this.one.isSatisfiedBy(candidate) && this.other.isSatisfiedBy(candidate);
    }
}
class OrSpecification extends AbstractSpecification {
    constructor(one, other) {
        super();
        this.one = one;
        this.other = other;
    }
    isSatisfiedBy(candidate) {
        return this.one.isSatisfiedBy(candidate) || this.other.isSatisfiedBy(candidate);
    }
}
class NotSpecification extends AbstractSpecification {
    constructor(wrapped) {
        super();
        this.wrapped = wrapped;
    }
    isSatisfiedBy(candidate) {
        return !this.wrapped.isSatisfiedBy(candidate);
    }
}
//# sourceMappingURL=AbstractSpecification.js.map