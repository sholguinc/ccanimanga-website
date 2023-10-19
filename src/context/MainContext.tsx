import {
  MenuContextProvider,
  ScrollContextProvider,
  NavigateContextProvider,
} from '@/context';

import { IChildren } from '@/models';

export const MainContextProvider = ({ children }: IChildren) => {
  return (
    <NavigateContextProvider>
      <ScrollContextProvider>
        <MenuContextProvider>{children}</MenuContextProvider>
      </ScrollContextProvider>
    </NavigateContextProvider>
  );
};
