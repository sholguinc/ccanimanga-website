import { createContext, useState } from 'react';

import { INavigateContext, IChildren, NavigateContextType } from '@/models';

const defaultValue = {
  loading: true,
};

export const NavigateContext: NavigateContextType =
  createContext<INavigateContext>(defaultValue as INavigateContext);

export function NavigateContextProvider({ children }: IChildren) {
  const [loading, setLoading] = useState(true);

  const setDelayedLoading = (loading: boolean) => {
    setTimeout(() => {
      setLoading(loading);
    }, 300);
  };

  return (
    <NavigateContext.Provider
      value={{
        loading,
        setLoading,
        setDelayedLoading,
      }}
    >
      {children}
    </NavigateContext.Provider>
  );
}
