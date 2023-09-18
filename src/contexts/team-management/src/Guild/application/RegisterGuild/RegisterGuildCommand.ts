import { Command, Primitives } from 'core';
import { Member } from '../../../Member/domain/Member';
import { Guild } from '../../domain/Guild';

export class RegisterGuildCommand extends Command {
  readonly guild: Primitives<Guild>;
  readonly master: Primitives<Member>;

  constructor(guild: Primitives<Guild>, master: Primitives<Member>) {
    super();
    this.guild = guild;
    this.master = master;
  }
}
