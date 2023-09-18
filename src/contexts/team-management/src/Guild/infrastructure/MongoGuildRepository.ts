import { CacheStore, MongoConnection, MongoRepository, Nullable, Primitives, Uuid } from 'core';
import { Guild } from '../domain/Guild';
import { GuildRepository } from '../domain/GuildRepository';

export class MongoGuildRepository extends MongoRepository<Guild> implements GuildRepository {
  constructor(connection: MongoConnection, store: CacheStore) {
    super(connection, store, Guild);
  }

  async findGuildByName(guildName: string): Promise<Nullable<Guild>> {
    const guild = await this.collection.findOne<Nullable<Primitives<Guild>>>({ name: guildName });
    return guild ? new Guild(guild) : null;
  }

  async findGuildById(guildId: Uuid): Promise<Nullable<Guild>> {
    const transaction = this.collection.findOne<Nullable<Primitives<Guild>>>({ id: guildId.value });
    const guild = await this.cache.getOrSet<Nullable<Primitives<Guild>>>(this.model + '.' + guildId.value, transaction);
    return guild ? new Guild(guild) : null;
  }

  async registerGuild(guild: Guild): Promise<void> {
    await this.persist(guild.id.value, guild);
  }
}
