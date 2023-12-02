import React from 'react';

import { HTMLDivType, IUJWDay } from '@/models';

export interface IMenuContext {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
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
  setDelayedLoading: (loading: boolean) => void;
}

export type NavigateContextType = React.Context<INavigateContext>;

export interface ILightBoxContext {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setOpenIndex: (index: number) => void;
}

export type LightBoxContextType = React.Context<ILightBoxContext>;

export interface IUJWContext {
  day: IUJWDay;
  loading: boolean;
  setDayLoading: (selectedDay: IUJWDay) => void;
}

export type UJWContextType = React.Context<IUJWContext>;
