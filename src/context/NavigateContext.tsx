import { createContext, useState } from 'react';

import { INavigateContext, IChildren, NavigateContextType } from '@/models';

const defaultValue = {
  loading: true,
};

export const NavigateContext: NavigateContextType =
  createContext<INavigateContext>(defaultValue as INavigateContext);

export function NavigateContextProvider({ children }: IChildren) {
  const [loading, setLoading] = useState(true);

  return (
    <NavigateContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </NavigateContext.Provider>
  );
}
