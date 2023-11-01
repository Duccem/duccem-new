import { Member } from '../../../src/Member/domain/Member';
import { MemberClientRepository } from '../../../src/Member/domain/MemberRepository';

export class MockMemberClientRepository implements MemberClientRepository {
  identifyMock: jest.Mock = jest.fn();
  createMock: jest.Mock = jest.fn();
  recoveryPasswordMock: jest.Mock = jest.fn();
  changePasswordMock: jest.Mock = jest.fn();
  async identify(username: string, password: string): Promise<{ member: Member; token: string }> {
    return this.identifyMock(username, password);
  }
  async create(member: Member): Promise<void> {
    this.createMock(member);
  }
  async recoveryPassword(email: string): Promise<void> {
    this.recoveryPasswordMock(email);
  }
  async changePassword(memberId: string, newPassword: string, oldPassword: string): Promise<void> {
    this.changePasswordMock(memberId, newPassword, oldPassword);
  }

  returnOnIdentify(member: Member, token: string): void {
    this.identifyMock.mockResolvedValue({ member, token });
  }

  assertIdentifyHaveBeenCalledWith(username: string, password: string): void {
    expect(this.identifyMock).toHaveBeenCalledWith(username, password);
  }

  assertCreateHaveBeenCalledWith(member: Member): void {
    expect(this.createMock).toHaveBeenCalledWith(member);
  }

  assertRecoveryPasswordHaveBeenCalledWith(email: string): void {
    expect(this.recoveryPasswordMock).toHaveBeenCalledWith(email);
  }

  assertChangePasswordHaveBeenCalledWith(memberId: string, newPassword: string, oldPassword: string): void {
    expect(this.changePasswordMock).toHaveBeenCalledWith(memberId, newPassword, oldPassword);
  }
}
