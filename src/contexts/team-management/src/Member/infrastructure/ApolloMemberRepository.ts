import { ApolloClient, NormalizedCacheObject, gql } from '@apollo/client';
import { ApolloRepository, Nullable } from 'core';
import { Member } from '../domain/Member';
import { MemberClientRepository } from '../domain/MemberRepository';
import { LOGIN } from './Apollo/login';
import { REGISTER } from './Apollo/register';

export class ApolloMemberRepository extends ApolloRepository<Member> implements MemberClientRepository {
  constructor(client: ApolloClient<NormalizedCacheObject>) {
    super(client, Member);
  }
  async create(member: Member): Promise<void> {
    await this.client.mutate({
      mutation: REGISTER,
      variables: { member: member.toPrimitives() },
    });
  }
  async identify(identifier: string, password: string): Promise<Nullable<{ token: string; member: Member }>> {
    const result = await this.client.query({
      query: LOGIN,
      variables: { identifier, password },
    });
    const element = result.data.login;
    return {
      member: new Member(element.member),
      token: element.token,
    };
  }

  async recoveryPassword(email: string): Promise<void> {
    await this.client.mutate({
      mutation: gql`
        mutation recoveryPassword($email: String) {
          recoveryPassword(email: $email)
        }
      `,
      variables: { email },
    });
  }
}
