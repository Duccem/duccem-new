import { MemberClientRepository } from '../../domain/MemberRepository';

export class ChangePasswordDispatcher {
  constructor(private repository: MemberClientRepository) {}
  async dispatch(memberId: string, newPassword: string, oldPassword: string) {
    this.repository.changePassword(memberId, newPassword, oldPassword);
  }
}
