import { Nullable, Uuid } from 'core';
import { Member } from './Member';

export interface MemberRepository {
  identify(username: string): Promise<Nullable<Member>>;
  create(id: Uuid, member: Member): Promise<void>;
  getByEmail(email: string): Promise<Nullable<Member>>;
}

export interface MemberClientRepository {
  identify(username: string, password: string): Promise<Nullable<{ member: Member; token: string }>>;
  create(member: Member): Promise<void>;
  recoveryPassword(email: string): Promise<void>;
}
