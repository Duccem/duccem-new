import { PropsWithChildren, createContext, useContext } from "react";
import { AuthStoreActions, useAuthStore } from "./AuthState";


export const AuthStoreContext = createContext({} as AuthStoreActions);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const { authState, ...actions } = useAuthStore();
  return (
    <AuthStoreContext.Provider value={{ authState, ...actions }}>
        {children}
    </AuthStoreContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthStoreContext);
