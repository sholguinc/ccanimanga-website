import React from 'react';

import { HTMLDivType } from '@/models';

export interface IMenuContext {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: () => void;
  scrollableNodeRef: React.RefObject<HTMLDivType>;
}

export type MenuContextType = React.Context<IMenuContext>;
