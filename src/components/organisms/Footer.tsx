import { Text, AngleUp } from '@/components/atoms';
import { OrganizationList, SocialMediaList } from '@/components/molecules';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__text">
          <div className="footer__social-media">
            <SocialMediaList invert={true} gap={15} />
          </div>
          <OrganizationList />
          <Text weight="light" family="noto-jp" className="footer__country">
            Lima, Perú
          </Text>
        </div>
        <AngleUp />
      </div>
    </footer>
  );
};
