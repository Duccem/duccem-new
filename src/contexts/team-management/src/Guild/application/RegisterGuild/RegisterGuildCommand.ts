import { Command, Primitives } from 'core';
import { Member } from '../../../Member/domain/Member';
import { Guild } from '../../domain/Guild';

export class RegisterGuildCommand extends Command {
  readonly guild: Primitives<Guild>;
  readonly admin: any;

  constructor(guild: Primitives<Guild>, admin: Primitives<Member>) {
    super();
    this.guild = guild;
    this.admin = admin;
  }
}
