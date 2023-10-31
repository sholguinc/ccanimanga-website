import React from 'react';
import { LinkProps } from 'react-router-dom';

import { IActivityData, SocialMediaSite, IWorkshop, ILogo } from '@/models';

// Base
type ChildrenType = string | React.ReactNode;
export type HTMLDivType = HTMLDivElement | null;

type ColorType = 'black' | 'gray' | 'white' | 'deep-blue' | 'ccam-red';
type TextSizeType =
  | 'small'
  | 'medium'
  | 'large'
  | 'larger'
  | 'x-large'
  | 'xx-large'
  | 'custom';
type WeightType = 'light' | 'regular' | 'semi-bold' | 'bold-medium' | 'bold';
type Familytype = 'quicksand' | 'noto-jp' | 'figtree' | 'hiro-misake';
type TextTransformType = 'uppercase' | 'capitalize';

type ButtonSizeType = 'medium' | 'x-large' | 'xx-large';

export interface IChildren {
  children: ChildrenType;
}

export interface IClassName {
  className?: string;
}

// Atoms
export interface IText extends IClassName {
  children: string;
  color?: ColorType;
  size?: TextSizeType;
  weight?: WeightType;
  family?: Familytype;
  transform?: TextTransformType;
}

export interface IHamburger {
  size: number;
}

export interface ISocialMedia {
  site: SocialMediaSite;
  invert?: boolean;
}

export type IDelayLink = IChildren & LinkProps;

export interface IButton extends IClassName {
  text?: string;
  size?: ButtonSizeType;
  invert?: boolean;
  to: string;
}

export interface IBackground extends IChildren {
  src: string;
  alt: string;
  brightness?: number;
}

// Molecules
export interface ISocialMediaList {
  direction?: 'row' | 'column';
  gap?: number;
  invert?: boolean;
}

export interface IActivity {
  activity: IActivityData;
}

export interface ILogos {
  logos: ILogo[];
}

export interface IWorkshopBanner {
  title: string;
  img: string;
}

export interface IWorkshopDescription {
  text: string;
  img: string;
}

// Organisms
export interface IInfoCard extends IClassName {
  title: string;
  text: string;
  image: string;
  to?: string;
  reverse?: boolean;
}

export interface IBanner {
  title: string;
  img?: string;
  brightness?: number;
}

export interface IGallery {
  title?: string;
}

// Templates
export interface IErrorTemplate {
  text: string;
  subtext?: string;
}

export interface ILoadingTemplate {
  duration: number;
}

export interface IWorkshopTemplate {
  workshop: IWorkshop;
}

export interface IWorkshopsTemplate {
  workshops: IWorkshop[];
}
