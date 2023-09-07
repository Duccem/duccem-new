import { Uuid } from 'core';
import { GuildClientRepository } from '../../domain/GuildRepository';

export class ChoosePlanDispatcher {
  constructor(private readonly guildRepository: GuildClientRepository) {}
  async dispatch(guildId: string, plan: string) {
    await this.guildRepository.choosePlan(new Uuid(guildId), plan);
  }
}
