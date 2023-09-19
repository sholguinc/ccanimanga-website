import { Hamburger, SocialMedia } from '@/components/atoms';

import { SocialMediaSite } from '@/models';

export const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__hamburger">
        <Hamburger />
      </div>
      <div className="sidebar__social-media">
        <p className="sidebar__social-media__text">
          Síguenos
        </p>
        <ul className="sidebar__social-media__icons">
          <li>
            <SocialMedia site={SocialMediaSite.Facebook} />
          </li>
          <li>
            <SocialMedia site={SocialMediaSite.Instagram} />
          </li>
        </ul>
      </div>
    </aside>
  );
};
