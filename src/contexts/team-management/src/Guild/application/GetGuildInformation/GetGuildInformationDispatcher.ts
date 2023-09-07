import { Uuid } from 'core';
import { GuildClientRepository } from '../../domain/GuildRepository';

export class GetGuildInformationDispatcher {
  constructor(private readonly repository: GuildClientRepository) {}

  dispatch(guildId: string) {
    return this.repository.getGuildInformation(new Uuid(guildId));
  }
}
