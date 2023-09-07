import { Entity, NumberValueObject, Primitives, StringValueObject } from 'core';

export class Price extends Entity {
  priceId: StringValueObject;
  amount: NumberValueObject;
  period: StringValueObject;
  plan: StringValueObject;
  constructor(data: Primitives<Price>) {
    super(data);
    this.priceId = new StringValueObject(data.priceId);
    this.amount = new NumberValueObject(data.amount);
    this.period = new StringValueObject(data.period);
    this.plan = new StringValueObject(data.plan);
  }

  public toPrimitives(): Primitives<Price> {
    return {
      id: this.id.value,
      priceId: this.priceId.value,
      amount: this.amount.value,
      period: this.period.value,
      plan: this.plan.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
