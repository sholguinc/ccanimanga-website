import { createContext, useState } from 'react';

import { ILightBoxContext, IChildren, LightBoxContextType } from '@/models';

const defaultValue = {
  index: 0,
  open: false,
};

export const LightBoxContext: LightBoxContextType =
  createContext<ILightBoxContext>(defaultValue as ILightBoxContext);

export function LightBoxContextProvider({ children }: IChildren) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const setOpenIndex = (index: number): void => {
    setIndex(index);
    setOpen(true);
  };

  return (
    <LightBoxContext.Provider
      value={{
        open,
        setOpen,
        index,
        setIndex,
        setOpenIndex,
      }}
    >
      {children}
    </LightBoxContext.Provider>
  );
}
