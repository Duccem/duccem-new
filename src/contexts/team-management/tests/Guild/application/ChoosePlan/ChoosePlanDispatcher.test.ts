import { Uuid, UuidMother } from 'core';
import { ChoosePlanDispatcher } from '../../../../src/Guild/application/ChoosePlan/ChoosePlanDispatcher';
import { MockGuildClientRepository } from '../../__mocks__/MockGuildClientRepository';
import { GuildPlanMother } from '../../domain/GuildPlanMother';

describe('ChoosePlanDispatcher', () => {
  let repository: MockGuildClientRepository;
  let dispatcher: ChoosePlanDispatcher;

  beforeEach(() => {
    repository = new MockGuildClientRepository();
    dispatcher = new ChoosePlanDispatcher(repository);
  });

  it('should choose a plan', async () => {
    const guildId = UuidMother.random();
    const plan = GuildPlanMother.random().value;

    await dispatcher.dispatch(guildId, plan);

    repository.assertChoosePlanHaveBeenCalledWith(new Uuid(guildId), plan);
  });
});
