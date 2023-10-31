import { createContext, useState } from 'react';

import { ILightBoxContext, IChildren, LightBoxContextType } from '@/models';

const defaultValue = {
  open: false,
};

export const LightBoxContext: LightBoxContextType =
  createContext<ILightBoxContext>(defaultValue as ILightBoxContext);

export function LightBoxContextProvider({ children }: IChildren) {
  const [open, setOpen] = useState(false);

  return (
    <LightBoxContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </LightBoxContext.Provider>
  );
}
