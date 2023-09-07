import { Uuid } from '@ducen/shared/core';
import { PaymentClientRepository } from '../../domain/PaymentRepository';

export class CreateSessionDispatcher {
  constructor(private readonly paymentRepository: PaymentClientRepository) {}

  async dispatch(guildId: string, period: string): Promise<void> {
    await this.paymentRepository.createSession(new Uuid(guildId), period);
  }
}
