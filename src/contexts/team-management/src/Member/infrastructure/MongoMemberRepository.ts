import { CacheStore, MongoRepository, Nullable, Primitives, Uuid } from 'core';
import { MongoClient } from 'mongodb';
import { Member } from '../domain/Member';
import { MemberRepository } from '../domain/MemberRepository';

export class MongoMemberRepository extends MongoRepository<Member> implements MemberRepository {
  constructor(connection: MongoClient, store: CacheStore) {
    super(connection, store, Member);
  }
  async create(id: Uuid, member: Member): Promise<void> {
    await this.persist(id.value, member);
  }

  async identify(identifier: string): Promise<Member> {
    const member = await this.collection.findOne<Nullable<Primitives<Member>>>({
      $or: [{ email: identifier }, { nickname: identifier }],
    });
    return member ? new Member(member) : null;
  }

  async getByEmail(email: string): Promise<Nullable<Member>> {
    const member = await this.collection.findOne<Nullable<Primitives<Member>>>({ email });
    return member ? new Member(member) : null;
  }
}
