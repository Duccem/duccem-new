import { RegisterGuildCommand } from '../../../../src/Guild/application/RegisterGuild/RegisterGuildCommand';
import { MemberMother } from '../../../Member/domain/MemberMother';
import { GuildMother } from '../../domain/GuildMother';

export class RegisterGuildCommandMother {
  static create(): RegisterGuildCommand {
    return new RegisterGuildCommand(GuildMother.create().toPrimitives(), MemberMother.create().toPrimitives());
  }
}
