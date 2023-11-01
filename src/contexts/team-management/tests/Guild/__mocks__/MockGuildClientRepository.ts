import { Uuid } from 'core';
import { Guild } from '../../../src/Guild/domain/Guild';
import { GuildClientRepository } from '../../../src/Guild/domain/GuildRepository';
import { Member } from '../../../src/Member/domain/Member';

export class MockGuildClientRepository implements GuildClientRepository {
  choosePlanMock: jest.Mock = jest.fn();
  getGuildInformationMock: jest.Mock = jest.fn();
  registerGuildMock: jest.Mock = jest.fn();
  async registerGuild(guild: Guild, admin: Member): Promise<void> {
    this.registerGuildMock(guild, admin);
  }
  getGuildInformation(guildId: Uuid): Promise<Guild> {
    return this.getGuildInformationMock(guildId);
  }
  async choosePlan(guildId: Uuid, plan: string): Promise<void> {
    this.choosePlanMock(guildId, plan);
  }

  assertRegisterHaveBeenCalledWith(guild: Guild, admin: Member): void {
    expect(this.registerGuildMock).toHaveBeenCalledWith(guild, admin);
  }

  assertGetGuildInformationHaveBeenCalledWith(guildId: Uuid): void {
    expect(this.getGuildInformationMock).toHaveBeenCalledWith(guildId);
  }

  assertChoosePlanHaveBeenCalledWith(guildId: Uuid, plan: string): void {
    expect(this.choosePlanMock).toHaveBeenCalledWith(guildId, plan);
  }

  returnOnGetGuildInformation(guild: Guild): void {
    this.getGuildInformationMock.mockReturnValue(guild);
  }
}
