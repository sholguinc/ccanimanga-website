import { LogosUJW } from '@/components/molecules';
import { Banner, Gallery, InfoCard } from '@/components/organisms';

import UJWBanner from '@/assets/images/uni-japan-week.jpg';
import UJWImage from '@/assets/figures/yukata-girl.png';

import { mangaGallery } from '@/data';

export const UNIJapanWeekTemplate = () => {
  return (
    <>
      <Banner title="UNI Japan Week" img={UJWBanner} />
      <InfoCard
        title=""
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusantium beatae corpori deseruntearum error placeat, reprehenderit?
        Beatae est non sapiente. Aut et in non quis repellendus, saepsuscipit
        vero voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusantium beatae corpori deseruntearum error placeat, reprehenderit?
        Beatae est non sapiente. Aut et in non quis repellendus, saepsuscipit
        vero voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusantium beatae corpori deseruntearum error placeat, reprehenderit?
        Beatae est non sapiente. Aut et in non quis repellendus, saepsuscipit
        vero voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusantium beatae corpori deseruntearum error placeat, reprehenderit?
        Beatae est non sapiente. Aut et in non quis repellendus, saepsuscipit
        vero voluptatem."
        image={UJWImage}
        imageTransform="translateY(10%)"
        reverse={true}
        className="ujw__description"
      />
      <div className="ujw__gallery">
        <Gallery images={mangaGallery} />
      </div>
      <LogosUJW />
    </>
  );
};
