import { Hamburger, Text } from '@/components/atoms';
import { SocialMediaList } from '@/components/molecules';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__hamburger">
        <Hamburger size={45} />
      </div>
      <div className="sidebar__social-media">
        <Text
          weight="bold"
          color="white"
          size="larger"
          className="sidebar__social-media__text"
        >
          Síguenos
        </Text>
        <div className="sidebar__social-media-list">
          <SocialMediaList direction="column" />
        </div>
      </div>
    </aside>
  );
};
