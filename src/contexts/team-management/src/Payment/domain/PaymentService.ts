import { GuildPlan } from '../../Guild/domain/GuildPlan';

export interface PaymentService {
  createSession(plan: GuildPlan, period: string): Promise<{ sessionId: string; url: string }>;
}
