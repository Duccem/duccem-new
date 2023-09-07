import { Nullable, Uuid } from 'core';
import { GuildPlan } from '../../Guild/domain/GuildPlan';
import { Payment } from './Payment';
import { Price } from './Price';

export interface PaymentRepository {
  save(payment: Payment): Promise<void>;
  findBySessionId(sessionId: string): Promise<Nullable<Payment>>;
  findByGuildId(guildId: string): Promise<Array<Payment>>;
  findLastPaymentPendingByGuildId(guildId: string): Promise<Nullable<Payment>>;
  findPriceByPlanAndPeriod(plan: GuildPlan, period: string): Promise<Nullable<Price>>;
}

export interface PaymentClientRepository {
  createSession(guildId: Uuid, period: string): Promise<void>;
  getLastSession(guildId: Uuid): Promise<Nullable<Payment>>;
}
