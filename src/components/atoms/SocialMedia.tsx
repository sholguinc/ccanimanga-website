import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ISocialMedia } from '@/models';
import { SocialMediaLinks as Links, SocialMediaIcons as Icons } from '@/data';

export const SocialMedia = ({ site, invert = false }: ISocialMedia) => {
  return (
    <a href={Links[site]} target="_blank" rel="noopener noreferrer">
      <div className="social-media" data-invert={invert}>
        <FontAwesomeIcon icon={Icons[site]} className="social-media__icon" />
      </div>
    </a>
  );
};
