import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CommandBus, QueryBus } from 'core';
import { LoginQuery, MemberRegisterCommand, RecoveryPasswordCommand } from 'team-management';

@Resolver('Member')
export class MemberResolver {
  constructor(
    @Inject('QUERY_BUS') private queryBus: QueryBus,
    @Inject('COMMAND_BUS') private commandBus: CommandBus,
  ) {}

  @Mutation('memberRegister')
  async memberRegister(@Args('member') user: any) {
    const command = new MemberRegisterCommand(user);
    await this.commandBus.dispatch(command);
    return null;
  }

  @Query('login')
  async login(@Args('identifier') identifier: string, @Args('password') password: string) {
    const query = new LoginQuery(identifier, password);
    return await this.queryBus.ask(query);
  }

  @Mutation('recoveryPassword')
  async recoveryPassword(@Args('email') email: string) {
    const command = new RecoveryPasswordCommand(email);
    await this.commandBus.dispatch(command);
    return null;
  }
}
