import { Nullable, Uuid } from 'core';
import { Payment } from './Payment';

export interface PaymentRepository {
  save(payment: Payment): Promise<void>;
  findBySessionId(sessionId: string): Promise<Nullable<Payment>>;
  findLastPaymentPendingByGuildId(guildId: string): Promise<Nullable<Payment>>;
}

export interface PaymentClientRepository {
  createSession(guildId: Uuid, period: string): Promise<void>;
  getLastSession(guildId: Uuid): Promise<Nullable<Payment>>;
}
