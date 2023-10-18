import React from 'react';

import { HTMLDivType } from '@/models';

export interface IMainContext {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: () => void;
  scrollableNodeRef: React.RefObject<HTMLDivType>;
}

export type MainContextType = React.Context<IMainContext>;
