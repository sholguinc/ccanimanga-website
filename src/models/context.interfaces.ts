import React from 'react';

import { HTMLDivType } from '@/models';

export interface IMenuContext {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: () => void;
}

export type MenuContextType = React.Context<IMenuContext>;

export interface IScrollContext {
  scrollableNodeRef: React.RefObject<HTMLDivType>;
  scrollBack: (behaviour: ScrollBehavior) => void;
}

export type ScrollContextType = React.Context<IScrollContext>;

export interface INavigateContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export type NavigateContextType = React.Context<INavigateContext>;

export interface ILightBoxContext {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type LightBoxContextType = React.Context<ILightBoxContext>;
