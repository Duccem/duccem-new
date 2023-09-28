/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { ApolloRepository, Uuid } from 'core';
import { Member } from '../../Member/domain/Member';
import { Guild } from '../domain/Guild';
import { GuildClientRepository } from '../domain/GuildRepository';
import { CHOOSE_PLAN } from './apollo/choosePlan';
import { FIND_BY_ID } from './apollo/findById';
import { REGISTER_GUILD } from './apollo/registerGuild';

export class ApolloGuildRepository extends ApolloRepository<Guild> implements GuildClientRepository {
  constructor(client: ApolloClient<NormalizedCacheObject>) {
    super(client, Guild);
  }
  async registerGuild(guild: Guild, admin: Member): Promise<void> {
    const result = await this.client.mutate({
      mutation: REGISTER_GUILD,
      variables: {
        guild: guild.withOutNulls(),
        user: admin.withOutNulls(),
      },
    });
    if (result.errors) {
      throw new Error(result.errors[0].message);
    }
  }

  async getGuildInformation(guildId: Uuid): Promise<NonNullable<Guild>> {
    const result = await this.client.query({
      query: FIND_BY_ID,
      variables: {
        guildId: guildId.value,
      },
    });
    if (result.errors) {
      throw new Error(result.errors[0].message);
    }
    return result.data.guildInformation ? new Guild(result.data.guildInformation) : null;
  }

  async choosePlan(guildId: Uuid, plan: string): Promise<void> {
    const result = await this.client.mutate({
      mutation: CHOOSE_PLAN,
      variables: {
        guildId: guildId.value,
        plan,
      },
    });
    if (result.errors) {
      throw new Error(result.errors[0].message);
    }
  }
}
