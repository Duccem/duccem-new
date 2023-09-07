import { Aggregate, DateValueObject, Email, Image, Primitives, StringValueObject } from 'core';
import { GuildConfiguration } from './GuildConfiguration';
import { GuildCreatedDomainEvent } from './GuildCreatedDomainEvent';
import { GuildPlan } from './GuildPlan';

export class Guild extends Aggregate {
  public configuration: GuildConfiguration;
  public name: StringValueObject;
  public email: Email;
  public country: StringValueObject;
  public description: StringValueObject;
  public foundationDate: DateValueObject;
  public objective: StringValueObject;
  public image: Image;
  constructor(data: Primitives<Guild>) {
    super(data);
    this.configuration = new GuildConfiguration(data.configuration);
    this.name = new StringValueObject(data.name);
    this.email = new Email(data.email);
    this.country = new StringValueObject(data.country);
    this.description = new StringValueObject(data.description);
    this.foundationDate = new DateValueObject(data.foundationDate);
    this.objective = new StringValueObject(data.objective);
    this.image = new Image(data.image);
  }

  static Create(data: Primitives<Guild>) {
    const guild = new Guild(data);
    guild.record(
      new GuildCreatedDomainEvent({
        aggregateId: guild.id.value,
        params: {
          guildId: guild.id.value,
        },
      }),
    );
    return guild;
  }

  downgradePlan() {
    this.configuration.changePlan(GuildPlan.Free());
  }

  changePlan(plan: GuildPlan) {
    this.configuration.changePlan(plan);
  }

  payPlan() {
    this.configuration.planStatus = new StringValueObject('paid');
    this.configuration.lastPayment = DateValueObject.today();
    this.configuration.nextPayment = DateValueObject.today().addDays(30);
  }

  public toPrimitives(): Primitives<Guild> {
    return {
      id: this.id.value,
      configuration: this.configuration.toPrimitives(),
      name: this.name.value,
      email: this.email.value,
      country: this.country.value,
      description: this.description.value,
      foundationDate: this.foundationDate.value,
      objective: this.objective.value,
      image: this.image.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
