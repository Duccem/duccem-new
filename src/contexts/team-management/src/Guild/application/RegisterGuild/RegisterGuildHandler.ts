import { Command, CommandBus, CommandHandler, EventBus } from 'core';
import { MemberRegisterCommand } from '../../../Member/application/MemberRegister/MemberRegisterCommand';
import { Guild } from '../../domain/Guild';
import { GuildAlreadyExistError } from '../../domain/GuildAlreadyExistError';
import { GuildRepository } from '../../domain/GuildRepository';
import { RegisterGuildCommand } from './RegisterGuildCommand';

export class RegisterGuildHandler implements CommandHandler<RegisterGuildCommand> {
  constructor(
    private guildRepository: GuildRepository,
    private eventBus: EventBus,
    private commandBus: CommandBus,
  ) {}
  subscribedTo(): Command {
    return RegisterGuildCommand;
  }

  async handle({ guild, master }: RegisterGuildCommand): Promise<void> {
    const newGuild = Guild.Create(guild, master);
    master.guildId = newGuild.id.value;
    const existGuild = await this.guildRepository.findGuildByName(newGuild.name.value);
    if (existGuild) throw new GuildAlreadyExistError(guild.name);

    await this.commandBus.dispatch(new MemberRegisterCommand(master));
    await this.guildRepository.registerGuild(newGuild);

    await this.eventBus.publish(newGuild.pullDomainEvents());
  }
}
