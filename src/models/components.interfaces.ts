import React from 'react';

import { IActivityData, SocialMediaSite, ISlide } from '@/models';

// Base
type ChildrenType = string | React.ReactNode;
export type HTMLDivType = HTMLDivElement | null;

type AlternativeType = 'primary' | 'secondary' | 'tertiary';
type ColorType = 'black' | 'gray' | 'white' | 'deep-blue' | 'ccam-red';
type TextSizeType =
  | 'small'
  | 'medium'
  | 'large'
  | 'larger'
  | 'x-large'
  | 'xx-large';
type WeightType = 'light' | 'regular' | 'semi-bold' | 'bold';
type Familytype = 'quicksand' | 'noto-jp' | 'figtree';

type ButtonSizeType = 'medium' | 'xx-large';

export interface IChildren {
  children: ChildrenType;
}

// Atoms
export interface IText {
  children: string;
  type?: AlternativeType;
  color?: ColorType;
  size?: TextSizeType;
  weight?: WeightType;
  family?: Familytype;
  className?: string;
}

export interface IHamburger {
  size: number;
}

export interface ISocialMedia {
  site: SocialMediaSite;
  invert?: boolean;
}

export interface IButton {
  text?: string;
  size?: ButtonSizeType;
  invert?: boolean;
  redirectTo: string;
}

// Molecules
export interface ISocialMediaList {
  direction?: 'row' | 'column';
  gap?: number;
  invert?: boolean;
}

export interface IActivity {
  data: IActivityData;
}

// Organisms
export interface ISlider {
  slides: ISlide[];
}

// Templates
export interface IErrorTemplate {
  text: string;
  subtext?: string;
}
