import { DateValueObject, EmailMother, Primitives, UuidMother, WordMother } from 'core';
import { Guild } from '../../../src/Guild/domain/Guild';
import { GuildPlan } from '../../../src/Guild/domain/GuildPlan';
import { GuildPlanStatus } from '../../../src/Guild/domain/GuildPlanStatus';

export class GuildMother {
  static create(data?: Partial<Primitives<Guild>>): Guild {
    return new Guild({
      id: UuidMother.random(),
      name: WordMother.random({ maxLength: 20 }),
      email: EmailMother.random({}),
      country: WordMother.country(),
      image: WordMother.image(),
      objective: WordMother.random({ maxLength: 20 }),
      description: WordMother.random({ maxLength: 20 }),
      configuration: {
        category: WordMother.random({ maxLength: 10 }),
        lang: WordMother.random({ maxLength: 2 }),
        lastPayment: DateValueObject.today().value,
        nextPayment: DateValueObject.today().addDays(30).value,
        plan: GuildPlan.Free().value,
        planStatus: GuildPlanStatus.None().value,
        timezone: WordMother.timezone(),
      },
      foundationDate: DateValueObject.today().value,
      createdAt: DateValueObject.today().value,
      updatedAt: DateValueObject.today().value,
      ...data,
    });
  }
}
