import { createContext, useState } from 'react';

import { IUJWContext, IChildren, UJWContextType, IUJWDay } from '@/models';
import { UJWDays } from '@/data';

const defaultValue = {
  day: UJWDays[0],
};

export const UJWContext: UJWContextType = createContext<IUJWContext>(
  defaultValue as IUJWContext,
);

export function UJWContextProvider({ children }: IChildren) {
  const [day, setDay] = useState<IUJWDay>(UJWDays[0]);

  return (
    <UJWContext.Provider
      value={{
        day,
        setDay,
      }}
    >
      {children}
    </UJWContext.Provider>
  );
}
