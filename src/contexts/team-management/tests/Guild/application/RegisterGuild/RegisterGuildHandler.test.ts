import { CommandBusMock, EventBusMock } from 'core';
import { RegisterGuildHandler } from '../../../../src/Guild/application/RegisterGuild/RegisterGuildHandler';
import { GuildAlreadyExistError } from '../../../../src/Guild/domain/GuildAlreadyExistError';
import { MemberRegisterCommandMother } from '../../../Member/domain/MemberRegisterCommandMother';
import { MockGuildRepository } from '../../__mocks__/MockGuildRepository';
import { GuildCreatedDomainEventMother } from '../../domain/GuildCreatedDomainEventMother';
import { GuildMother } from '../../domain/GuildMother';
import { RegisterGuildCommandMother } from './RegisterGuildCommandMother';

describe('RegisterGuild', () => {
  let repository: MockGuildRepository;
  let handler: RegisterGuildHandler;
  let eventBus: EventBusMock;
  let commandBus: CommandBusMock;

  beforeEach(() => {
    repository = new MockGuildRepository();
    eventBus = new EventBusMock();
    commandBus = new CommandBusMock();
    handler = new RegisterGuildHandler(repository, eventBus, commandBus);
  });

  it('should register a guild', async () => {
    const command = RegisterGuildCommandMother.create();
    const guild = GuildMother.create(command.guild);
    const event = GuildCreatedDomainEventMother.fromGuild(guild);
    const memberCommand = MemberRegisterCommandMother.fromPrimitives(command.master);
    await handler.handle(command);

    repository.assertRegisterHaveBeenCalledWith(guild);
    eventBus.assertLastPublishedEventIs(event);
    commandBus.assertLastPublishedEventIs(memberCommand);
  });

  it('should throw an error when guild already exist', async () => {
    const command = RegisterGuildCommandMother.create();
    const guild = GuildMother.create(command.guild);
    repository.returnOnFindByName(guild);
    await expect(handler.handle(command)).rejects.toBeInstanceOf(GuildAlreadyExistError);
  });
});
