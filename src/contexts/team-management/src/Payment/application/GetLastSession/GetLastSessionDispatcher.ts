import { Uuid } from 'core';
import { PaymentClientRepository } from '../../domain/PaymentRepository';

export class GetLastSessionDispatcher {
  constructor(private readonly paymentRepository: PaymentClientRepository) {}

  async dispatch(guildId: string): Promise<any> {
    return await this.paymentRepository.getLastSession(new Uuid(guildId));
  }
}
