import {
  ChoosePlanDispatcher,
  CreateSessionDispatcher,
  GetGuildInformationDispatcher,
  GetLastSessionDispatcher,
  LoginDispatcher,
  MemberRegisterDispatcher,
  RecoveryPasswordDispatcher,
  RegisterGuildDispatcher,
} from 'team-management';
import { useDucenContext } from '../../../_shared/store/DucenContext';
import { useAuthContext } from './AuthContext';

export const useAuthService = () => {
  const { guildRepository, memberRepository, paymentRepository } = useDucenContext();
  const { authState, setGuildID, setMember } = useAuthContext();

  const registerGuild = async () => {
    const dispatcher = new RegisterGuildDispatcher(guildRepository);
    const { guild, admin } = authState;
    const newGuild = await dispatcher.dispatch(guild, admin);
    setGuildID(newGuild.id.value);
  };

  const identifyGuild = async (id: string) => {
    const dispatcher = new GetGuildInformationDispatcher(guildRepository);
    const guild = await dispatcher.dispatch(id);
    if (guild) {
      setGuildID(guild.id.value);
      return true;
    }
    return false;
  };

  const registerMember = async () => {
    const dispatcher = new MemberRegisterDispatcher(memberRepository);
    const { admin, guildId } = authState;
    await dispatcher.dispatch(admin, guildId);
  };

  const choosePlan = async () => {
    const dispatcher = new ChoosePlanDispatcher(guildRepository);
    const { guildId, plan } = authState;
    await dispatcher.dispatch(guildId, plan);
  };

  const createPaymentSession = async () => {
    const dispatcher = new CreateSessionDispatcher(paymentRepository);
    const { guildId, yearly } = authState;
    await dispatcher.dispatch(guildId, yearly === 'true' ? 'yearly' : 'monthly');
  };

  const getLastPaymentSession = async () => {
    const dispatcher = new GetLastSessionDispatcher(paymentRepository);
    const { guildId } = authState;
    const paymentSession = await dispatcher.dispatch(guildId);
    return paymentSession;
  };

  const login = async (identifier: string, password: string) => {
    const dispatcher = new LoginDispatcher(memberRepository);
    const { member, token } = await dispatcher.dispatch(identifier, password);

    localStorage.setItem('token', token);
    setMember(member.toPrimitives());
  };

  const recoveryPassword = async (email: string) => {
    const dispatcher = new RecoveryPasswordDispatcher(memberRepository);
    await dispatcher.dispatch(email);
  };

  return {
    registerGuild,
    identifyGuild,
    registerMember,
    choosePlan,
    createPaymentSession,
    getLastPaymentSession,
    login,
    recoveryPassword,
  };
};

export type AuthServices = ReturnType<typeof useAuthService>;
