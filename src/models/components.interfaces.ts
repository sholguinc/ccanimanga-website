import React from 'react';

import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

// Base
type ChildrenType = string | React.ReactNode;
export type HTMLDivType = HTMLDivElement | null;

export interface IChildren {
  children: ChildrenType;
}

// Atoms
export enum SocialMediaSite {
  Facebook = "facebook",
  Instagram = "instagram",
}

export type ISocialMediaIcon = {
  [key in SocialMediaSite]: IconDefinition;
};

export type ISocialMediaLink = {
  [key in SocialMediaSite]: string;
};

export interface ISocialMedia {
  site: SocialMediaSite;
}

