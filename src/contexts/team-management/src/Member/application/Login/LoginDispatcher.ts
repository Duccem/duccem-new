import { MemberClientRepository } from '../../domain/MemberRepository';

export class LoginDispatcher {
  constructor(private readonly repository: MemberClientRepository) {}

  async dispatch(identifier: string, password: string) {
    const { member, token } = await this.repository.identify(identifier, password);
    return { member, token };
  }
}
