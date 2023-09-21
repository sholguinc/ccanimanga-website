import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import {
  ISocialMediaIcons,
  ISocialMediaLinks,
  SocialMediaSite,
} from '@/models';

export const SocialMediaIcons: ISocialMediaIcons = {
  [SocialMediaSite.Facebook]: faFacebook,
  [SocialMediaSite.Instagram]: faInstagram,
};

export const SocialMediaLinks: ISocialMediaLinks = {
  [SocialMediaSite.Facebook]: 'https://www.facebook.com/ccam.uni.pe',
  [SocialMediaSite.Instagram]: 'https://www.instagram.com/ccam.uni',
};
