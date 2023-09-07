import { Command, CommandHandler, Uuid } from 'core';
import { GuildPlan, GuildPlanEnum } from '../../domain/GuildPlan';
import { GuildRepository } from '../../domain/GuildRepository';
import { ChoosePlanCommand } from './ChoosePlanCommand';

export class ChoosePlanHandler implements CommandHandler<ChoosePlanCommand> {
  constructor(private readonly guildRepository: GuildRepository) {}
  subscribedTo(): Command {
    return ChoosePlanCommand;
  }

  async handle({ guildId, plan }: ChoosePlanCommand): Promise<void> {
    const guild = await this.guildRepository.findGuildById(new Uuid(guildId));
    guild.changePlan(new GuildPlan(plan as GuildPlanEnum));
    await this.guildRepository.registerGuild(guild);
  }
}
