import { Inject, UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CommandBus, QueryBus } from 'core';
import { ChoosePlanCommand, GetGuildInformationQuery, GetMemberMasterQuery, RegisterGuildCommand } from 'team-management';
import { ResponseModeler } from '../utils/Responses/ResponseInterceptor';

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
  @UseInterceptors(ResponseModeler)
  async guildInformation(@Args('guildId') guildId: string) {
    const query = new GetGuildInformationQuery(guildId);
    return await this.queryBus.ask(query);
  }

  @ResolveField('master')
  async master(@Parent() guild: any) {
    const query = new GetMemberMasterQuery(guild.id);
    const master = await this.queryBus.ask(query);
    return master.toPrimitives();
  }
}
