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
  TikTok = 'tiktok',
  Email = 'email',
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
  description: string;
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
  description: string;
  descriptionImage: string;
  figure: string;
  figureTransform?: string;
  gallery: IGalleryImage[];
}

export interface ILogo {
  name: string;
  img: string;
  transform?: string;
}

export interface IGalleryImage {
  src: string;
  alt: string;
}

export interface IUJWDay {
  name: string;
  image: string;
  gallery: IGalleryImage[];
}
