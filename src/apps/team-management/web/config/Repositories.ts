import { ApolloGuildRepository, ApolloMemberRepository, ApolloPaymentRepository } from 'team-management';
import client from './ApolloClient';

const guildRepository = new ApolloGuildRepository(client);
const memberRepository = new ApolloMemberRepository(client);
const paymentRepository = new ApolloPaymentRepository(client);

export { guildRepository, memberRepository, paymentRepository };
