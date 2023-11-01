import { GetLastSessionDispatcher } from "../../../../src/Payment/application/GetLastSession/GetLastSessionDispatcher";
import { MockPaymentRepository } from "../../__mocks__/MockPaymentRepository";
import { PaymentMother } from "../../domain/PaymentMother";

describe('GetLastSessionDispatcher', () => {
  let dispatcher: GetLastSessionDispatcher;
  let repository: MockPaymentRepository;

  beforeEach(() => {
    repository = new MockPaymentRepository();
    dispatcher = new GetLastSessionDispatcher(repository);
  });

  it('should get last session', async () => {
    const payment = PaymentMother.create();
    repository.returnGetLastSession(payment);
    const response = await dispatcher.dispatch(payment.guildId.value);

    repository.assertGetLastSessionIsCalledWith(payment.guildId);
    expect(response).toEqual(payment);
  });
});
