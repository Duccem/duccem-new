import { Query } from '@ducen/shared/core';

export class GetLastSessionQuery extends Query {
  constructor(public readonly guildId: string) {
    super();
  }
}
