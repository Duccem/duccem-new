import { Command } from '@ducen/shared/core';

export class CreateSessionCommand extends Command {
  constructor(public readonly guildId: string, public readonly period: string) {
    super();
  }
}
