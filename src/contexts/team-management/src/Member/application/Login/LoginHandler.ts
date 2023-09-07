import { Query, QueryHandler } from 'core';
import { IncorrectPassword } from '../../domain/IncorrectPassword';
import { MemberNotExist } from '../../domain/MemberNotExist';
import { MemberRepository } from '../../domain/MemberRepository';
import { LoginQuery } from './LoginQuery';

export class LoginHandler implements QueryHandler<LoginQuery> {
  constructor(
    private userRepository: MemberRepository,
    private authKey: string,
  ) {}
  subscribedTo(): Query {
    return LoginQuery;
  }

  async handle(query: LoginQuery): Promise<any> {
    const member = await this.userRepository.identify(query.identifier);
    if (!member) throw new MemberNotExist();

    const authenticated = member.password.compare(query.password);
    if (!authenticated) throw new IncorrectPassword();

    return { token: member.generateToken(this.authKey), member: member.toPrimitives() };
  }
}
