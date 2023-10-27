import {
  faFacebook,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import {
  ISocialMediaIcons,
  ISocialMediaLinks,
  SocialMediaSite,
} from '@/models';

export const SocialMediaIcons: ISocialMediaIcons = {
  [SocialMediaSite.Facebook]: faFacebook,
  [SocialMediaSite.Instagram]: faInstagram,
  [SocialMediaSite.TikTok]: faTiktok,
  [SocialMediaSite.Email]: faEnvelope,
};

export const SocialMediaLinks: ISocialMediaLinks = {
  [SocialMediaSite.Facebook]: 'https://www.facebook.com/ccam.uni.pe',
  [SocialMediaSite.Instagram]: 'https://www.instagram.com/ccam.uni',
  [SocialMediaSite.TikTok]: 'https://www.tiktok.com/@ccam.uni',
  [SocialMediaSite.Email]: 'mailto:ccam.uni@uni.edu.pe',
};
