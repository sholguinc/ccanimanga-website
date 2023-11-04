import { Banner, InfoCard } from '@/components/organisms';

import { IWorkshopsTemplate } from '@/models';

import WorkshopsBanner from '@/assets/images/workshops.jpg';
import OtherWorkshops from '@/assets/figures/other-workshops.png';

export const WorkshopsTemplate = ({ workshops }: IWorkshopsTemplate) => {
  return (
    <>
      <Banner title="Talleres" img={WorkshopsBanner} />
      {workshops.map((workshop, index) => {
        const module = (index + 1) % 2;
        const reverse = module == 0;

        return (
          <InfoCard
            key={index}
            title={workshop.name}
            text={workshop.description}
            image={workshop.figure}
            imageTransform={workshop.figureTransform}
            to={workshop.path}
            reverse={reverse}
          />
        );
      })}
      <InfoCard
        title="Talleres Experimentales"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusantium beatae corpori deseruntearum error placeat, reprehenderit?
        Beatae est non sapiente. Aut et in non quis repellendus, saepsuscipit
        vero voluptatem!"
        image={OtherWorkshops}
        imageTransform="translateY(15%)"
        className="other-workshops"
      />
    </>
  );
};
