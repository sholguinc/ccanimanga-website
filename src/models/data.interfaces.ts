import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type FixedLengthArray<T, Length extends number> = [T, ...T[]] & {
  length: Length;
};

export type StringKeyObject<T> = {
  [key: string]: T;
};

export enum SocialMediaSite {
  Facebook = 'facebook',
  Instagram = 'instagram',
}

export type ISocialMediaIcons = {
  [key in SocialMediaSite]: IconDefinition;
};

export type ISocialMediaLinks = {
  [key in SocialMediaSite]: string;
};

export interface IOrganization {
  name: string;
  url: string;
}

export interface IActivityData {
  name: string;
  path: string;
  background: string;
}

export interface ISlide {
  src: string;
  alt: string;
}

export interface IRoute {
  name: string;
  path: string;
}

export interface IWorkshop {
  name: string;
  path: string;
  title: string;
  backgroundImage: string;
  summary: string;
  summaryImage: string;
}
