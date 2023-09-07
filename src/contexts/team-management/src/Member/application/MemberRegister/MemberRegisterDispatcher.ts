import { Primitives } from 'core';
import { Member } from '../../domain/Member';
import { MemberGenderEnum } from '../../domain/MemberGender';
import { MemberClientRepository } from '../../domain/MemberRepository';

export class MemberRegisterDispatcher {
  constructor(private readonly repository: MemberClientRepository) {}

  dispatch(member: Primitives<Member>, guildId: string) {
    const newMember = new Member({
      ...member,
      guildId,
      phoneNumber: '',
      gender: MemberGenderEnum.MALE,
      photo: '',
      biography: '',
    });
    return this.repository.create(newMember);
  }
}
