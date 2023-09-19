import { Provider } from '@nestjs/common';
import { connect } from 'amqplib';
import { MongoConnection, RabbitMQConnection, RedisConnection } from 'core';
import { MongoClient } from 'mongodb';
import { createClient } from 'redis';

export const connections: Provider[] = [
  {
    provide: 'DATABASE_CONNECTION',
    inject: ['DATABASE_CONFIGURATION'],
    useFactory: async (databaseConf: any) => {
      const client = await MongoClient.connect(databaseConf.uri);
      return new MongoConnection(databaseConf.name, client);
    },
  },
  {
    provide: 'QUEUE_CONNECTION',
    inject: ['QUEUE_CONFIGURATION'],
    useFactory: async (queueConf: any) => {
      try {
        console.log(queueConf);
        const connection = await connect('amqp://guest:guest@rabbitmq:5672');
        const channel = await connection.createConfirmChannel();
        await channel.prefetch(1);
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHSDJKAHGDF');
        return new RabbitMQConnection(channel);
      } catch (error) {
        console.log(error);
      }
    },
  },
  {
    provide: 'CACHE_CONNECTION',
    inject: ['CACHE_CONFIGURATION'],
    useFactory: async (cacheConf: any) => {
      const client = createClient(cacheConf);
      await client.connect();
      return new RedisConnection(client);
    },
  },
];
