import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import {
  SocialMediaSite,
  ISocialMedia,
  ISocialMediaIcon,
  ISocialMediaLink,
} from '@/models';

const Icon: ISocialMediaIcon = {
  [SocialMediaSite.Facebook]: faFacebook,
  [SocialMediaSite.Instagram]: faInstagram,
};

const Link: ISocialMediaLink = {
  [SocialMediaSite.Facebook]: 'https://www.facebook.com/ccam.uni.pe',
  [SocialMediaSite.Instagram]: 'https://www.instagram.com/ccam.uni',
};

export const SocialMedia = ({ site, invert = false }: ISocialMedia) => {
  return (
    <a href={Link[site]} target="_blank" rel="noopener noreferrer">
      <div className="social-media" data-invert={invert}>
        <FontAwesomeIcon icon={Icon[site]} className="social-media__icon" />
      </div>
    </a>
  );
};
