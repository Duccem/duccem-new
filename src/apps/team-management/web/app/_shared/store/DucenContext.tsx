'use client'
import { PropsWithChildren, createContext, useContext } from 'react';
import { GuildClientRepository, MemberClientRepository, PaymentClientRepository } from 'team-management';
import { Configurations } from '../../../config/Configurations';
import { AuthContextProvider } from '../../auth/_module/store/AuthContext';
import { SharedContextProvider } from './SharedContext';
import { combineComponents } from './combinedContexts';

export interface DucenContextState {
  configurations: Configurations,
  guildRepository: GuildClientRepository,
  memberRepository: MemberClientRepository,
  paymentRepository: PaymentClientRepository,
}

export const DucenContext = createContext<DucenContextState>({} as DucenContextState);

const providers = [
  SharedContextProvider,
  AuthContextProvider
]

export const AppContextProvider = combineComponents(...providers)

export const DucenContextProvider = ({ children, ...repositories }: PropsWithChildren<DucenContextState>) => {
  return (
    <DucenContext.Provider value={{...repositories}}>
      <AppContextProvider>
        {children}
      </AppContextProvider>
    </DucenContext.Provider>
  )
}

export const useDucenContext = () => useContext(DucenContext);
