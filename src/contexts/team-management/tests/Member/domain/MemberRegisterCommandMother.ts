import { Primitives } from 'core';
import { MemberRegisterCommand } from '../../../src/Member/application/MemberRegister/MemberRegisterCommand';
import { Member } from '../../../src/Member/domain/Member';

export class MemberRegisterCommandMother {
  static fromPrimitives(data: Primitives<Member>) {
    return new MemberRegisterCommand(data);
  }
}
