import { useReducer } from 'react';

export type SharedState = {
  loading: boolean;
  hasError: boolean;
  error: string;
};

export const initialSharedState: SharedState = {
  loading: false,
  hasError: false,
  error: '',
};

type SetLoading = { type: 'set_loading'; payload: boolean };
type SetError = { type: 'set_error'; payload: string };
type SetHasError = { type: 'set_has_error'; payload: boolean };

export type SharedActions = SetLoading | SetError | SetHasError;

const reducers = {
  set_loading: (state: SharedState, action: SetLoading): SharedState => ({ ...state, loading: action.payload }),
  set_error: (state: SharedState, action: SetError): SharedState => ({ ...state, error: action.payload }),
  set_has_error: (state: SharedState, action: SetHasError): SharedState => ({ ...state, hasError: action.payload }),
};

export function SharedReducer(state: SharedState, action: SharedActions) {
  const updateState = reducers[action.type] || (() => state);
  return updateState(state, action as any);
}

export function useSharedStore() {
  const [sharedState, sharedDispatch] = useReducer(SharedReducer, initialSharedState);

  const setLoading = (payload: boolean) => {
    sharedDispatch({ type: 'set_loading', payload });
  };

  const setError = (payload: string) => {
    sharedDispatch({ type: 'set_error', payload });
  };

  const setHasError = (payload: boolean) => {
    sharedDispatch({ type: 'set_has_error', payload });
  };

  return {
    sharedState,
    setLoading,
    setError,
    setHasError,
  };
}

export type SharedStoreActions = ReturnType<typeof useSharedStore>;
