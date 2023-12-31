export interface PaymentService {
  createSession(plan: string, period: string): Promise<{ sessionId: string; url: string }>;
}
