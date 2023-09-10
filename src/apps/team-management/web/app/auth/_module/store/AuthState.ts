/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Primitives } from 'core';
import { useReducer } from 'react';
import { Guild, Member } from 'team-management';

export type AuthState = {
  registerType: 'member' | 'guild';
  guild: Primitives<Guild>;
  admin: Primitives<Member>;
  token: string;
  step: number;
  plan?: string;
  yearly?: string;
  guildId?: string;
  loading: boolean;
};

export const initialAuthState: AuthState = {
  registerType: 'member',
  plan: null,
  yearly: 'false',
  guild: <Primitives<Guild>>{},
  admin: <Primitives<Member>>{},
  guildId: '',
  token: '',
  step: 1,
  loading: false,
};

type SetRegisterType = { type: 'set_register_type'; payload: 'member' | 'guild' };
type SetGuild = { type: 'set_guild'; payload: Primitives<Guild> };
type SetMember = { type: 'set_member'; payload: Primitives<Member> };
type SetCredentials = { type: 'set_credentials'; payload: { identifier: string; password: string } };
type SetPlan = { type: 'set_plan'; payload: { plan: string; yearly: string } };
type SetGuildID = { type: 'set_guild_id'; payload: string };
type SetLoading = { type: 'set_loading'; payload: boolean };

export type AuthActions = SetRegisterType | SetGuild | SetMember | SetCredentials | SetPlan | SetGuildID | SetLoading;

const reducers = {
  set_register_type: (state: AuthState, action: SetRegisterType): AuthState => ({ ...state, registerType: action.payload }),
  set_guild: (state: AuthState, action: SetGuild): AuthState => ({ ...state, guild: action.payload }),
  set_member: (state: AuthState, action: SetMember): AuthState => ({ ...state, admin: action.payload }),
  set_credentials: (state: AuthState, action: SetCredentials): AuthState => ({
    ...state,
    admin: { ...state.admin, nickname: action.payload.identifier, password: action.payload.password },
  }),
  set_plan: (state: AuthState, action: SetPlan): AuthState => ({ ...state, plan: action.payload.plan, yearly: action.payload.yearly }),
  set_guild_id: (state: AuthState, action: SetGuildID): AuthState => ({ ...state, guildId: action.payload }),
  set_loading: (state: AuthState, action: SetLoading): AuthState => ({ ...state, loading: action.payload }),
};

export function AuthReducer(state: AuthState, action: AuthActions) {
  const updateState = reducers[action.type] || (() => state);
  return updateState(state, action as any);
}

export function useAuthStore() {
  const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState);

  const setRegisterType = (payload: 'guild' | 'member') => {
    authDispatch({ type: 'set_register_type', payload });
  };

  const setGuild = (payload: Primitives<Guild>) => {
    authDispatch({ type: 'set_guild', payload });
  };

  const setMember = (payload: Primitives<Member>) => {
    authDispatch({ type: 'set_member', payload });
  };

  const setCredentials = (identifier: string, password: string) => {
    console.log('🚀 ~ file: AuthState.ts ~ line 120 ~ setCredentials ~ identifier, password', identifier, password);
    authDispatch({ type: 'set_credentials', payload: { identifier, password } });
  };

  const setPlan = (plan: string, yearly: string) => {
    authDispatch({ type: 'set_plan', payload: { plan, yearly } });
  };

  const setGuildID = (payload: string) => {
    authDispatch({ type: 'set_guild_id', payload });
  };

  const setLoading = (payload: boolean) => {
    authDispatch({ type: 'set_loading', payload });
  };

  return {
    authState: <AuthState>authState,
    setRegisterType,
    setMember,
    setGuild,
    setCredentials,
    setPlan,
    setGuildID,
    setLoading,
  };
}

export type AuthStoreActions = ReturnType<typeof useAuthStore>;
