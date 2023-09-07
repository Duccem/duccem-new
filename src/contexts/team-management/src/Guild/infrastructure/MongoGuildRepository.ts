import { CacheStore, MongoRepository, Nullable, Primitives, Uuid } from 'core';
import { MongoClient } from 'mongodb';
import { Guild } from '../domain/Guild';
import { GuildRepository } from '../domain/GuildRepository';

export class MongoGuildRepository extends MongoRepository<Guild> implements GuildRepository {
  constructor(connection: MongoClient, store: CacheStore) {
    super(connection, store, Guild);
  }

  async findGuildByName(guildName: string): Promise<Nullable<Guild>> {
    const guild = await this.collection.findOne<Nullable<Primitives<Guild>>>({ name: guildName });
    return guild ? new Guild(guild) : null;
  }

  async findGuildById(guildId: Uuid): Promise<Nullable<Guild>> {
    const guild = await this.collection.findOne<Nullable<Primitives<Guild>>>({ id: guildId.value });
    return guild ? new Guild(guild) : null;
  }

  async registerGuild(guild: Guild): Promise<void> {
    await this.collection.updateOne({ id: guild.id.value }, { $set: guild.toPrimitives() }, { upsert: true });
  }
}
