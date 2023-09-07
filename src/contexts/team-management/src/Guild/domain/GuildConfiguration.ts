import { DateValueObject, Entity, Primitives, StringValueObject } from 'core';
import { GuildPlan } from './GuildPlan';

export class GuildConfiguration extends Entity {
  category: StringValueObject;
  plan: GuildPlan;
  timezone: StringValueObject;
  lang: StringValueObject;
  lastPayment: DateValueObject;
  nextPayment: DateValueObject;
  planStatus: StringValueObject;

  constructor(data: Primitives<GuildConfiguration>) {
    super();
    this.category = new StringValueObject(data.category);
    this.plan = new GuildPlan(data.plan);
    this.timezone = new StringValueObject(data.timezone);
    this.lang = new StringValueObject(data.lang);
    this.nextPayment = data.nextPayment ? new DateValueObject(data.nextPayment) : DateValueObject.today();
    this.lastPayment = data.nextPayment ? new DateValueObject(data.nextPayment) : DateValueObject.today();
    this.planStatus = new StringValueObject(data.planStatus || 'paid');
  }

  changePlan(plan: GuildPlan): void {
    this.plan = plan;
  }

  public toPrimitives(): Primitives<GuildConfiguration> {
    return {
      category: this.category.value,
      plan: this.plan.value,
      timezone: this.timezone.value,
      lang: this.lang.value,
      nextPayment: this.nextPayment.value,
      lastPayment: this.lastPayment.value,
      planStatus: this.planStatus.value,
    };
  }
}
