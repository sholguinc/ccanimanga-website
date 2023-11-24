import { AboutUsSection } from '@/components/molecules';
import { Banner } from '@/components/organisms';

import AboutUsBanner from '@/assets/images/about-us.jpg';
import CcamGroup from '@/assets/images/ccam-group.jpg';
import Uni from '@/assets/images/uni.jpg';

export const AboutUsTemplate = () => {
  return (
    <>
      <Banner title="Quiénes Somos" img={AboutUsBanner} brightness={0.75} />
      <AboutUsSection
        title="Centro Cultural Anime y Manga"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae
          consectetur eligendi illo nam neque, nulla, possimus quas, quidem quos
          repellendus sint. Accusantium excepturi illum, quos soluta tempora
          totam voluptate?. Accusantium excepturi illum, quos soluta tempora
          totam voluptate?. Accusantium excepturi illum, quos soluta tempora
          totam voluptate?"
        image={CcamGroup}
      />
      <AboutUsSection
        title="Ubicación"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae
          consectetur eligendi illo nam neque, nulla, possimus quas, quidem quos
          repellendus sint. Accusantium excepturi illum, quos soluta tempora
          totam voluptate?"
        image={Uni}
        reverse={true}
      />
      <AboutUsSection
        title="Organización"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae
          consectetur eligendi illo nam neque, nulla, possimus quas, quidem quos
          repellendus sint. Accusantium excepturi illum, quos soluta tempora
          totam voluptate?"
        image={Uni}
      />
      <AboutUsSection
        title="Comunidad"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae
          consectetur eligendi illo nam neque, nulla, possimus quas, quidem quos
          repellendus sint. Accusantium excepturi illum, quos soluta tempora
          totam voluptate?."
        image={Uni}
        reverse={true}
        className="last-section"
      />
    </>
  );
};
