import { Provider } from '@nestjs/common';
import {
  CommandHandlers,
  DomainEventFailOverPublisher,
  InMemoryCommandBus,
  InMemoryQueryBus,
  MongoConnection,
  QueryHandlers,
  RabbitMQConnection,
  RabbitMQEventBus,
} from 'core';
import { commandHandlersRegister } from './commandHandlers.provider';
import { eventHandlersRegister } from './eventHandlers';
import { queryHandlersRegister } from './queryHandlers.provider';

export const busesProvider: Provider[] = [
  {
    provide: 'EVENT_BUS',
    inject: ['QUEUE_CONNECTION', 'DATABASE_CONNECTION', ...eventHandlersRegister],
    useFactory: (qConnection: RabbitMQConnection, dbConnection: MongoConnection, ...handlers) => {
      const failoverPublisher = new DomainEventFailOverPublisher(dbConnection);
      const eventBus = new RabbitMQEventBus(failoverPublisher, qConnection);
      eventBus.addSubscribers(handlers);
      return eventBus;
    },
  },
  {
    provide: 'COMMAND_BUS',
    inject: [...commandHandlersRegister],
    useFactory: (...args) => {
      const handlers = new CommandHandlers(args);
      return new InMemoryCommandBus(handlers);
    },
  },
  {
    provide: 'QUERY_BUS',
    inject: [...queryHandlersRegister],
    useFactory: (...args) => {
      const handlers = new QueryHandlers(args);
      return new InMemoryQueryBus(handlers);
    },
  },
];
