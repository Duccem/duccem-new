import { Stripe } from 'stripe';
import { PaymentEventType } from '../domain/PaymentEventType';
import { PaymentService } from '../domain/PaymentService';
import { Price } from '../domain/Price';

export class StripePaymentService implements PaymentService {
  private client: Stripe;
  public static allowedEvents = new Map([
    ['checkout.session.completed', PaymentEventType.SuccessSession],
    ['checkout.session.expired', PaymentEventType.SuccessSession],
  ]);
  constructor(secretKey: string) {
    this.client = new Stripe(secretKey, { apiVersion: '2023-08-16' });
  }
  async createSession(price: Price): Promise<{ sessionId: string; url: string }> {
    const session = await this.client.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: price.priceId.value,
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:4200/auth/completed',
      cancel_url: 'http://localhost:4200/auth/choose-plan',
    });
    return {
      sessionId: session.id,
      url: session.url,
    };
  }
}
