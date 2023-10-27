import React, { createContext } from 'react';

import { IScrollContext, IChildren, ScrollContextType } from '@/models';

export const ScrollContext: ScrollContextType = createContext<IScrollContext>(
  {} as IScrollContext,
);

export function ScrollContextProvider({ children }: IChildren) {
  const scrollableNodeRef = React.createRef<HTMLDivElement>();

  const scrollBack = (behavior: ScrollBehavior): void => {
    scrollableNodeRef?.current?.scrollTo({
      top: 0,
      left: 0,
      behavior: behavior,
    });
  };

  return (
    <ScrollContext.Provider
      value={{
        scrollableNodeRef,
        scrollBack,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
