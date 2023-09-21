import { Stripe } from 'stripe';
import { PaymentEventType } from '../domain/PaymentEventType';
import { PaymentService } from '../domain/PaymentService';

export class StripePaymentService implements PaymentService {
  private client: Stripe;
  public static allowedEvents = new Map([
    ['checkout.session.completed', PaymentEventType.SuccessSession],
    ['checkout.session.expired', PaymentEventType.SuccessSession],
  ]);
  constructor(secretKey: string) {
    this.client = new Stripe(secretKey, { apiVersion: '2023-08-16' });
  }
  async createSession(plan: string, period: string): Promise<{ sessionId: string; url: string }> {
    const prices = await this.client.prices.search({
      query: `${plan} - ${period}`,
    });

    const session = await this.client.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: prices.data[0].id,
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
