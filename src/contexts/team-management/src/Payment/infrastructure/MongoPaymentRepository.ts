import { CacheStore, MongoRepository, Nullable, Primitives } from 'core';
import { MongoClient } from 'mongodb';
import { GuildPlan } from '../../Guild/domain/GuildPlan';
import { Payment } from '../domain/Payment';
import { PaymentRepository } from '../domain/PaymentRepository';
import { PaymentStatusEnum } from '../domain/PaymentStatus';
import { Price } from '../domain/Price';

export class MongoPaymentRepository extends MongoRepository<Payment> implements PaymentRepository {
  constructor(connection: MongoClient, store: CacheStore) {
    super(connection, store, Payment);
  }

  async save(payment: Payment): Promise<void> {
    await this.persist(payment.id.value, payment);
  }

  async findBySessionId(sessionId: string): Promise<Nullable<Payment>> {
    const payment = await this.collection.findOne<Primitives<Payment>>({ sessionId });
    return payment ? new Payment(payment) : null;
  }

  async findByGuildId(guildId: string): Promise<Array<Payment>> {
    const payments = await this.collection.find<Primitives<Payment>>({ guildId }).sort({ createdAt: -1 }).toArray();
    return payments.map((payment) => new Payment(payment));
  }

  async findLastPaymentPendingByGuildId(guildId: string): Promise<Nullable<Payment>> {
    const payments = await this.collection
      .find<Primitives<Payment>>({ guildId, status: PaymentStatusEnum.PENDING })
      .sort({ createdAt: -1 })
      .toArray();
    return payments.length > 0 ? new Payment(payments[0]) : null;
  }

  async findPriceByPlanAndPeriod(plan: GuildPlan, period: string): Promise<Nullable<Price>> {
    const price = await this.subModel(Price).findOne<Primitives<Price>>({ plan: plan.value, period });
    return price ? new Price(price) : null;
  }
}
