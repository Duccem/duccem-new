import { Primitives } from 'core';
import { addDays } from 'date-fns';
import { Member } from '../../../Member/domain/Member';
import { MemberGenderEnum } from '../../../Member/domain/MemberGender';
import { Guild } from '../../domain/Guild';
import { GuildPlanEnum } from '../../domain/GuildPlan';
import { GuildPlanStatusEnum } from '../../domain/GuildPlanStatus';
import { GuildClientRepository } from '../../domain/GuildRepository';

export class RegisterGuildDispatcher {
  constructor(private readonly repository: GuildClientRepository) {}

  async dispatch(guildData: Primitives<Guild>, admin: Primitives<Member>): Promise<{ guild: Guild; master: Member }> {
    const guild = new Guild({
      ...guildData,
      description: '',
      objective: '',
      configuration: {
        plan: GuildPlanEnum.FREE,
        category: '',
        lang: admin.configuration.lang,
        timezone: 'America/Caracas',
        lastPayment: new Date(),
        nextPayment: addDays(new Date(), 30),
        planStatus: GuildPlanStatusEnum.PENDING,
      },
    });
    const master = new Member({
      ...admin,
      phoneNumber: '',
      gender: MemberGenderEnum.MALE,
      photo: '',
      biography: '',
    });
    await this.repository.registerGuild(guild, master);
    return { guild, master };
  }
}
