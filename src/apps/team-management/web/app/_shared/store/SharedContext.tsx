'use client'
import { PropsWithChildren, createContext, useContext } from "react";
import { SharedStoreActions, useSharedStore } from "./SharedState";

export const SharedStoreContext = createContext({} as SharedStoreActions);
export const SharedContextProvider = ({ children }: PropsWithChildren) => {
  const sharedStore = useSharedStore();
  return (
    <SharedStoreContext.Provider value={sharedStore}>
      {children}
    </SharedStoreContext.Provider>
  )
}

export const useSharedStoreContext = () => useContext(SharedStoreContext);
