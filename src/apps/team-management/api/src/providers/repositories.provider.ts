import { Provider } from '@nestjs/common';
import { MongoConnection, RedisCacheStore } from 'core';
import { MongoGuildRepository, MongoMemberRepository, MongoPaymentRepository } from 'team-management';

export const repositories: Provider[] = [
  {
    provide: 'GUILD_REPOSITORY',
    inject: ['DATABASE_CONNECTION', 'CACHE_STORE'],
    useFactory: (connection: MongoConnection, store: RedisCacheStore) => new MongoGuildRepository(connection, store),
  },
  {
    provide: 'MEMBER_REPOSITORY',
    inject: ['DATABASE_CONNECTION', 'CACHE_STORE'],
    useFactory: (connection: MongoConnection, store: RedisCacheStore) => new MongoMemberRepository(connection, store),
  },
  {
    provide: 'PAYMENT_REPOSITORY',
    inject: ['DATABASE_CONNECTION', 'CACHE_STORE'],
    useFactory: (connection: MongoConnection, store: RedisCacheStore) => new MongoPaymentRepository(connection, store),
  },
];
