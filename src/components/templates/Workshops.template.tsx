import { Banner, InfoCard } from '@/components/organisms';

import { IWorkshopsTemplate } from '@/models';
import { WorkshopsBanner, OtherWorkshops } from '@/data';

import { truncateText } from '@/utils';

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
            text={truncateText(workshop.description)}
            image={workshop.figure}
            imageTransform={workshop.figureTransform}
            to={workshop.path}
            reverse={reverse}
          />
        );
      })}
      <InfoCard
        title="Talleres Experimentales"
        text='Todos los talleres no-oficiales que realizamos las denominamos "experimentales"
          y sirven para probar nuevas actividades que puedan ser de interés y formalizarse
          en un futuro. Por ejemplo, modelado 3D, cerámica en frío, música japonesa, etc.'
        image={OtherWorkshops}
        imageTransform="scale(1.6) translate(-2%, 15%)"
        className="other-workshops"
      />
    </>
  );
};
