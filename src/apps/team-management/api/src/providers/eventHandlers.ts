import { Provider } from '@nestjs/common';
import { GuildPlanPaidSubscriber } from 'team-management';

export const eventHandlers: Provider[] = [
  {
    provide: GuildPlanPaidSubscriber,
    inject: ['GUILD_REPOSITORY'],
    useFactory: (repository: any) => new GuildPlanPaidSubscriber(repository),
  },
];

export const eventHandlersRegister = [GuildPlanPaidSubscriber];
