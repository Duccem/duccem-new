import { Uuid, UuidMother } from 'core';
import { GetGuildInformationDispatcher } from '../../../../src/Guild/application/GetGuildInformation/GetGuildInformationDispatcher';
import { MockGuildClientRepository } from '../../__mocks__/MockGuildClientRepository';
import { GuildMother } from '../../domain/GuildMother';

describe('GetGuildInformationDispatcher', () => {
  let repository: MockGuildClientRepository;
  let dispatcher: GetGuildInformationDispatcher;

  beforeEach(() => {
    repository = new MockGuildClientRepository();
    dispatcher = new GetGuildInformationDispatcher(repository);
  });

  it('should get guild information', async () => {
    const guildId = UuidMother.random();
    const guild = GuildMother.create({ id: guildId });
    repository.returnOnGetGuildInformation(guild);
    const response = await dispatcher.dispatch(guildId);
    repository.assertGetGuildInformationHaveBeenCalledWith(new Uuid(guildId));
    expect(response).toEqual(guild);
  });
});
