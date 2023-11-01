import { InternalError } from "core";
import { StripePaymentService } from "../../../src/Payment/infrastructure/StripePaymentService";

describe('StripePaymentService', () => {
  let service: StripePaymentService;

  beforeEach(() => {
    service = new StripePaymentService(
        'sk_test_51Nj7AuKd2DSZKFovHpEaUfQmCI9zxVhImH9ADR77uymdMTnpQQkGt9GpzyRbgLiIjJo3iz9HVnZvoIsVKRAIoent00TT8hPqON',
        'http://localhost:4200'
      );
  });

  it('should create a session', async () => {
    const session = await service.createSession('premium', 'monthly');
    expect(session).toBeDefined();
  });

  it('should not found the price', async () => {
    await expect(service.createSession('invalid-plan', 'monthly')).rejects.toBeInstanceOf(InternalError);
  });
});
