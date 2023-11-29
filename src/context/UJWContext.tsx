import { createContext, useState } from 'react';

import { IUJWContext, IChildren, UJWContextType, IUJWDay } from '@/models';
import { UJWDays } from '@/data';

const defaultValue = {
  day: UJWDays[0],
  loading: false,
};

export const UJWContext: UJWContextType = createContext<IUJWContext>(
  defaultValue as IUJWContext,
);

export function UJWContextProvider({ children }: IChildren) {
  const [day, setDay] = useState<IUJWDay>(UJWDays[0]);
  const [loading, setLoading] = useState<boolean>(false);

  const setDayLoading = (selectedDay: IUJWDay) => {
    !loading && setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setDay(selectedDay);
    }, 400);
  };

  return (
    <UJWContext.Provider
      value={{
        day,
        loading,
        setDayLoading,
      }}
    >
      {children}
    </UJWContext.Provider>
  );
}
