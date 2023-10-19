import React, { createContext } from 'react';

import { IScrollContext, IChildren, ScrollContextType } from '@/models';

export const ScrollContext: ScrollContextType = createContext<IScrollContext>(
  {} as IScrollContext,
);

export function ScrollContextProvider({ children }: IChildren) {
  const scrollableNodeRef = React.createRef<HTMLDivElement>();

  return (
    <ScrollContext.Provider
      value={{
        scrollableNodeRef,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
