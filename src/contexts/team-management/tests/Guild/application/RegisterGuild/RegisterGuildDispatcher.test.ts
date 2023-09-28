import { RegisterGuildDispatcher } from '../../../../src/Guild/application/RegisterGuild/RegisterGuildDispatcher';
import { MemberMother } from '../../../Member/domain/MemberMother';
import { MockGuildClientRepository } from '../../__mocks__/MockGuildClientRepository';
import { GuildMother } from '../../domain/GuildMother';

describe('RegisterGuildDispatcher', () => {
  let repository: MockGuildClientRepository;
  let dispatcher: RegisterGuildDispatcher;

  beforeEach(() => {
    repository = new MockGuildClientRepository();
    dispatcher = new RegisterGuildDispatcher(repository);
  });

  it('should register a guild', async () => {
    const guild = GuildMother.create().toPrimitives();
    const master = MemberMother.create().toPrimitives();

    const { guild: guildCreated, master: masterCreated } = await dispatcher.dispatch(guild, master);
    repository.assertRegisterHaveBeenCalledWith(guildCreated, masterCreated);
  });
});
