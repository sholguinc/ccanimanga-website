import { Text, AngleUp } from '@/components/atoms';
import { OrganizationList, SocialMediaList } from '@/components/molecules';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__text">
          <div className="footer__social-media">
            <Text
              size="larger"
              color="ccam-red"
              weight="bold-medium"
              className="footer__follow-us"
            >
              Síguenos:
            </Text>
            <SocialMediaList invert={true} gap={10} />
          </div>
          <OrganizationList />
          <Text weight="light" family="noto-jp" className="footer__copyright">
            &copy; 2023 • Sergio Holguín • Lima, Perú
          </Text>
        </div>
        <AngleUp />
      </div>
    </footer>
  );
};
