import { SocialMediaSite } from '@/models';
import { SocialMedia } from '@/components/atoms';

import { ISocialMediaList } from '@/models';

export const SocialMediaList = ({
  direction = 'row',
  gap = 8,
  invert = false,
}: ISocialMediaList) => {
  const classNames = ['social-media-list ', direction];

  return (
    <ul className={classNames.join(' ')} style={{ gap }}>
      <li>
        <SocialMedia site={SocialMediaSite.Facebook} invert={invert} />
      </li>
      <li>
        <SocialMedia site={SocialMediaSite.Instagram} invert={invert} />
      </li>
      <li>
        <SocialMedia site={SocialMediaSite.TikTok} invert={invert} />
      </li>
      <li>
        <SocialMedia site={SocialMediaSite.Email} invert={invert} />
      </li>
    </ul>
  );
};
