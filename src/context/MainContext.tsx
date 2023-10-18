import React, { createContext, useState } from 'react';

import { IMainContext, IChildren, MainContextType } from '@/models';

const defaultValue = {
  menu: false,
};

export const MainContext: MainContextType = createContext<IMainContext>(
  defaultValue as IMainContext,
);

export function MainContextProvider({ children }: IChildren) {
  const scrollableNodeRef = React.createRef<HTMLDivElement>();
  const [menu, setMenu] = useState(false);

  const openMenu = (): void => {
    setMenu(!menu);
  };

  return (
    <MainContext.Provider
      value={{
        menu,
        setMenu,
        openMenu,
        scrollableNodeRef,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
