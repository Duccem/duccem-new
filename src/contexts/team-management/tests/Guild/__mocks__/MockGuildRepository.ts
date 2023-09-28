import { Uuid } from 'core';
import { Guild } from '../../../src/Guild/domain/Guild';
import { GuildRepository } from '../../../src/Guild/domain/GuildRepository';

export class MockGuildRepository implements GuildRepository {
  findByIdMock: jest.Mock = jest.fn();
  findByNameMock: jest.Mock = jest.fn();
  registerGuildMock: jest.Mock = jest.fn();
  async findGuildById(guildId: Uuid): Promise<Guild> {
    return this.findByIdMock(guildId);
  }
  async registerGuild(guild: Guild): Promise<void> {
    this.registerGuildMock(guild);
  }
  async findGuildByName(guildName: string): Promise<Guild> {
    return this.findByNameMock(guildName);
  }

  assertRegisterHaveBeenCalledWith(guild: Guild): void {
    expect(this.registerGuildMock).toHaveBeenCalledWith(guild);
  }

  assertFindByIdHaveBeenCalledWith(guildId: Uuid): void {
    expect(this.findByIdMock).toHaveBeenCalledWith(guildId);
  }

  assertFindByNameHaveBeenCalledWith(guildName: string): void {
    expect(this.findByNameMock).toHaveBeenCalledWith(guildName);
  }

  returnOnFindById(guild: Guild): void {
    this.findByIdMock.mockReturnValue(guild);
  }

  returnOnFindByName(guild: Guild): void {
    this.findByNameMock.mockReturnValue(guild);
  }
}
