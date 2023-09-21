import { DateValueObject, Primitives } from 'core';
import { Guild } from '../../../src/Guild/domain/Guild';
import { GuildPlan } from '../../../src/Guild/domain/GuildPlan';
import { GuildPlanStatus } from '../../../src/Guild/domain/GuildPlanStatus';

export class GuildMother {
  static create(data: Primitives<Guild>): Guild {
    return new Guild({
      id: '67979052-eeb3-4807-aa0c-6710897fa48d',
      name: 'Guild name',
      email: 'guid@guild.com',
      country: 'USA',
      image: 'https://image.com/image.png',
      objective: 'Guild objective',
      description: 'Guild description',
      configuration: {
        category: 'category',
        lang: 'en',
        lastPayment: DateValueObject.today(),
        nextPayment: DateValueObject.today().addDays(30).value,
        plan: GuildPlan.Free().value,
        planStatus: GuildPlanStatus.None().value,
        timezone: 'America/New_York',
      },
      createdAt: DateValueObject.today().value,
      updatedAt: DateValueObject.today().value,
      ...data,
    });
  }
}
