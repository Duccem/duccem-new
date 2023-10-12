import { UuidMother, WordMother } from "core";
import { ChangePasswordDispatcher } from "../../../../src/Member/application/ChangePassword/ChangePasswordDispatcher";
import { MockMemberClientRepository } from "../../__mocks__/MockMemberClientRepository";

describe('ChangePasswordDispatcher', () => {
  let repository: MockMemberClientRepository;
  let dispatcher: ChangePasswordDispatcher;

  beforeEach(() => {
    repository = new MockMemberClientRepository();
    dispatcher = new ChangePasswordDispatcher(repository);
  });

  it('should change the password of a member', async () => {
    const memberId = UuidMother.random();
    const newPassword = WordMother.random({ maxLength: 10 });
    const oldPassword = WordMother.random({ maxLength: 10 });

    await dispatcher.dispatch(memberId, newPassword, oldPassword);

    repository.assertChangePasswordHaveBeenCalledWith(memberId, newPassword, oldPassword);
  });
})
