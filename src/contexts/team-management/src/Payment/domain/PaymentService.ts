import { Price } from './Price';

export interface PaymentService {
  createSession(price: Price): Promise<{ sessionId: string; url: string }>;
}
