import { Command, CommandHandler, Uuid } from 'core';
import { GuildNotFoundError } from '../../domain/GuildNotFoundError';
import { GuildPlanEnum } from '../../domain/GuildPlan';
import { GuildRepository } from '../../domain/GuildRepository';
import { ChoosePlanCommand } from './ChoosePlanCommand';

export class ChoosePlanHandler implements CommandHandler<ChoosePlanCommand> {
  constructor(private readonly guildRepository: GuildRepository) {}
  subscribedTo(): Command {
    return ChoosePlanCommand;
  }

  async handle({ guildId, plan }: ChoosePlanCommand): Promise<void> {
    const guild = await this.guildRepository.findGuildById(new Uuid(guildId));
    if (!guild) throw new GuildNotFoundError(guildId);
    guild.changePlan(plan as GuildPlanEnum);
    await this.guildRepository.registerGuild(guild);
  }
}
