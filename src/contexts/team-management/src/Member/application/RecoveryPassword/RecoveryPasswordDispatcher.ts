import { MemberClientRepository } from '../../domain/MemberRepository';

export class RecoveryPasswordDispatcher {
  constructor(private readonly memberRepository: MemberClientRepository) {}

  async dispatch(email: string): Promise<void> {
    await this.memberRepository.recoveryPassword(email);
  }
}
