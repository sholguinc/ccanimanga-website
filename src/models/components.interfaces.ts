import React from 'react';

import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

// Base
type ChildrenType = string | React.ReactNode;
export type HTMLDivType = HTMLDivElement | null;

type AlternativeType = 'primary' | 'secondary' | 'tertiary';
type ColorType = 'black' | 'gray' | 'white' | 'deep-blue';
type TextSizeType = 'small' | 'medium' | 'large' | 'larger';
type WeightType = 'light' | 'regular' | 'medium' | 'bold';
type Familytype = 'quicksand' | 'noto-jp';

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

export enum SocialMediaSite {
  Facebook = 'facebook',
  Instagram = 'instagram',
}

export type ISocialMediaIcon = {
  [key in SocialMediaSite]: IconDefinition;
};

export type ISocialMediaLink = {
  [key in SocialMediaSite]: string;
};

export interface ISocialMedia {
  site: SocialMediaSite;
  invert?: boolean;
}

export interface ISocialMediaList {
  direction?: 'row' | 'column';
  gap?: number;
  invert?: boolean;
}

// Molecules
export interface IOrganization {
  name: string;
  url: string;
}

// Organisms
