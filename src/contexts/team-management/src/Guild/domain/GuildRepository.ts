import { Nullable, Uuid } from 'core';
import { Member } from '../../Member/domain/Member';
import { Guild } from './Guild';

export interface GuildRepository {
  registerGuild(guild: Guild): Promise<void>;
  findGuildByName(guildName: string): Promise<Nullable<Guild>>;
  findGuildById(guildId: Uuid): Promise<Nullable<Guild>>;
}

export interface GuildClientRepository {
  registerGuild(guild: Guild, admin: Member): Promise<void>;
  getGuildInformation(guildId: Uuid): Promise<Nullable<Guild>>;
  choosePlan(guildId: Uuid, plan: string): Promise<void>;
}

export const GUILD_REPOSITORY = Symbol('GUILD_REPOSITORY');
