import { ApolloGuildRepository, ApolloMemberRepository, ApolloPaymentRepository } from 'team-management';
import { getClient } from './ApolloClient';
import { Configurations } from './Configurations';

export const getRepositories = (conf: Configurations) => {
  console.log(conf);
  const client = getClient(conf.baseUrl);
  const guildRepository = new ApolloGuildRepository(client);
  const memberRepository = new ApolloMemberRepository(client);
  const paymentRepository = new ApolloPaymentRepository(client);

  return { guildRepository, memberRepository, paymentRepository };
};
