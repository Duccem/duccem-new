import { Query, QueryHandler } from 'core';
import { AuthService } from '../../domain/AuthService';
import { IncorrectPassword } from '../../domain/IncorrectPassword';
import { MemberNotExist } from '../../domain/MemberNotExist';
import { MemberRepository } from '../../domain/MemberRepository';
import { LoginQuery } from './LoginQuery';

export class LoginHandler implements QueryHandler<LoginQuery> {
  constructor(
    private userRepository: MemberRepository,
    private authService: AuthService,
  ) {}
  subscribedTo(): Query {
    return LoginQuery;
  }

  async handle(query: LoginQuery): Promise<any> {
    const member = await this.userRepository.identify(query.identifier);
    if (!member) throw new MemberNotExist();

    const authenticated = member.password.compare(query.password);
    if (!authenticated) throw new IncorrectPassword();

    return { token: this.authService.generateToken(member), member: member.toPrimitives() };
  }
}
