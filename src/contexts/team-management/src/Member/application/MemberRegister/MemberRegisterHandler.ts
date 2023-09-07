import type { EventBus } from 'core';
import { Command, CommandHandler } from 'core';
import { Member } from '../../domain/Member';
import { MemberAlreadyExistError } from '../../domain/MemberAlreadyExistError';
import { MemberRepository } from '../../domain/MemberRepository';
import { MemberRegisterCommand } from './MemberRegisterCommand';

export class MemberRegisterHandler implements CommandHandler<MemberRegisterCommand> {
  constructor(
    private repository: MemberRepository,
    private readonly eventBus: EventBus,
  ) {}
  subscribedTo(): Command {
    return MemberRegisterCommand;
  }
  async handle({ member }: MemberRegisterCommand): Promise<void> {
    const [existUserByUsername, existUserByEmail] = await Promise.all([
      this.repository.identify(member.nickname),
      this.repository.identify(member.email),
    ]);

    if (existUserByUsername) throw new MemberAlreadyExistError(member.nickname);
    if (existUserByEmail) throw new MemberAlreadyExistError(member.email);

    const user = Member.Create(member);
    await this.repository.create(user.id, user);
    await this.eventBus.publish(user.pullDomainEvents());
  }
}
