import { Uuid, UuidMother } from "core";
import { CreateSessionDispatcher } from "../../../../src/Payment/application/CreateSession/CreateSessionDispatcher";
import { MockPaymentRepository } from "../../__mocks__/MockPaymentRepository";

describe('CreateSessionDispatcher', () => {
  let createSessionDispatcher: CreateSessionDispatcher;
  let repository: MockPaymentRepository

  beforeEach(() => {
    repository = new MockPaymentRepository();
    createSessionDispatcher = new CreateSessionDispatcher(repository);
  });

  it('should call repository.createSession', async () => {
    const guildId = UuidMother.random();
    const period = 'monthly';
    await createSessionDispatcher.dispatch(guildId, period);
    repository.assertCreateSessionIsCalledWith(new Uuid(guildId), period);
  });
});
