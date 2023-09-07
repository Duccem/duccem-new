import { Command, CommandHandler, Primitives, Uuid } from 'core';
import { GuildNotFoundError } from '../../../Guild/domain/GuildNotFoundError';
import { GuildRepository } from '../../../Guild/domain/GuildRepository';
import { Payment } from '../../domain/Payment';
import { PaymentRepository } from '../../domain/PaymentRepository';
import { PaymentService } from '../../domain/PaymentService';
import { PaymentStatusEnum } from '../../domain/PaymentStatus';
import { CreateSessionCommand } from './CreateSessionCommand';

export class CreateSessionHandler implements CommandHandler<CreateSessionCommand> {
  constructor(
    private readonly guildRepository: GuildRepository,
    private readonly paymentRepository: PaymentRepository,
    private readonly paymentService: PaymentService,
  ) {}
  subscribedTo(): Command {
    return CreateSessionCommand;
  }

  async handle({ guildId, period }: CreateSessionCommand): Promise<void> {
    const guild = await this.guildRepository.findGuildById(new Uuid(guildId));
    if (!guild) throw new GuildNotFoundError(guildId);

    const price = await this.paymentRepository.findPriceByPlanAndPeriod(guild.configuration.plan, period);
    if (!price) throw new Error('Price not found');

    const { sessionId, url } = await this.paymentService.createSession(price);
    const paymentData = {
      guildId: guild.id.value,
      sessionId,
      priceId: price.id.value,
      status: PaymentStatusEnum.PENDING,
      paymentDate: new Date(),
      url,
    };
    const payment = new Payment(paymentData as Primitives<Payment>);
    await this.paymentRepository.save(payment);
  }
}
