import { Command, CommandHandler, EventBus } from 'core';
import { Member } from '../../../Member/domain/Member';
import { MemberAlreadyExistError } from '../../../Member/domain/MemberAlreadyExistError';
import { MemberRepository } from '../../../Member/domain/MemberRepository';
import { Guild } from '../../domain/Guild';
import { GuildAlreadyExistError } from '../../domain/GuildAlreadyExistError';
import { GuildRepository } from '../../domain/GuildRepository';
import { RegisterGuildCommand } from './RegisterGuildCommand';

export class RegisterGuildHandler implements CommandHandler<RegisterGuildCommand> {
  constructor(
    private guildRepository: GuildRepository,
    private memberRepository: MemberRepository,
    private eventBus: EventBus,
  ) {}
  subscribedTo(): Command {
    return RegisterGuildCommand;
  }

  async handle({ guild, admin }: RegisterGuildCommand): Promise<void> {
    const newGuild = Guild.Create(guild);
    const newAdmin = Member.Create(admin, newGuild.id);
    const [existGuild, existAdminByEmail, existAdminByNick] = await Promise.all([
      this.guildRepository.findGuildByName(newGuild.name.value),
      this.memberRepository.identify(newAdmin.nickname.value),
      this.memberRepository.identify(newAdmin.email.value),
    ]);
    if (existGuild) throw new GuildAlreadyExistError(guild.name);
    if (existAdminByEmail) throw new MemberAlreadyExistError(newAdmin.nickname.value);
    if (existAdminByNick) throw new MemberAlreadyExistError(newAdmin.email.value);

    await this.guildRepository.registerGuild(newGuild);
    await this.memberRepository.create(newAdmin.id, newAdmin);

    await this.eventBus.publish([...newGuild.pullDomainEvents(), ...newAdmin.pullDomainEvents()]);
  }
}
