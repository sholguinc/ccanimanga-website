import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

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
