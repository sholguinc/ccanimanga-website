import { Banner, InfoCard } from '@/components/organisms';

import { IWorkshopsTemplate } from '@/models';

import WorkshopsBanner from '@/assets/banners/workshops.jpg';
import OtherWorkshops from '@/assets/figures/other-workshops.png';

export const WorkshopsTemplate = ({ workshops }: IWorkshopsTemplate) => {
  return (
    <>
      <Banner title="Talleres" img={WorkshopsBanner} />
      {workshops.map((workshop) => (
        <InfoCard
          title={workshop.name}
          text={workshop.description}
          image={workshop.figure}
          to={workshop.path}
        />
      ))}
      <InfoCard
        title="Talleres Experimentales"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusantium beatae corpori deseruntearum error placeat, reprehenderit?
        Beatae est non sapiente. Aut et in non quis repellendus, saepsuscipit
        vero voluptatem!"
        image={OtherWorkshops}
        className="other-workshops"
      />
    </>
  );
};
