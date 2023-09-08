import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CommandBus, QueryBus } from 'core';
import { ChoosePlanCommand, GetGuildInformationQuery, RegisterGuildCommand } from 'team-management';

@Resolver('Guild')
export class GuildResolver {
  constructor(
    @Inject('QUERY_BUS') private queryBus: QueryBus,
    @Inject('COMMAND_BUS') private commandBus: CommandBus,
  ) {}
  @Mutation('guildRegister')
  async guildRegister(@Args('guild') guild: any, @Args('user') user: any) {
    const command = new RegisterGuildCommand(guild, user);
    await this.commandBus.dispatch(command);
    return null;
  }

  @Mutation('choosePlan')
  async choosePlan(@Args('guildId') guildId: string, @Args('plan') plan: string) {
    const command = new ChoosePlanCommand({ guildId, plan });
    await this.commandBus.dispatch(command);
    return null;
  }

  @Query('guildInformation')
  async guildInformation(@Args('guildId') guildId: string) {
    const query = new GetGuildInformationQuery(guildId);
    return await this.queryBus.ask(query);
  }

  @Query('ping')
  async ping() {
    return 'pong';
  }
}
