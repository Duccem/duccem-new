import { GuildNotFoundError } from '../src/Guild/domain/GuildNotFoundError';

describe('GuildPlan', () => {
  it('should create a valid guild plan', () => {
    const guildPlan = new GuildNotFoundError('123');
    expect(guildPlan.getMessage()).toBe('Guild with id 123 not found');
  });
});
