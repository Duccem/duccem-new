import { Provider } from '@nestjs/common';
import { MongoConnection } from 'core';
import { MongoGuildRepository, MongoMemberRepository, MongoPaymentRepository } from 'team-management';

export const repositories: Provider[] = [
  {
    provide: 'GUILD_REPOSITORY',
    inject: ['DATABASE_CONNECTION'],
    useFactory: (connection: MongoConnection) => new MongoGuildRepository(connection),
  },
  {
    provide: 'MEMBER_REPOSITORY',
    inject: ['DATABASE_CONNECTION'],
    useFactory: (connection: MongoConnection) => new MongoMemberRepository(connection),
  },
  {
    provide: 'PAYMENT_REPOSITORY',
    inject: ['DATABASE_CONNECTION'],
    useFactory: (connection: MongoConnection) => new MongoPaymentRepository(connection),
  },
];
