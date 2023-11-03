import { WorkshopBanner, Description } from '@/components/molecules';
import { PageBackground, Gallery } from '@/components/organisms';

import { IWorkshopTemplate } from '@/models';

export const WorkshopTemplate = ({ workshop }: IWorkshopTemplate) => {
  return (
    <PageBackground src={workshop.backgroundImage} alt={workshop.name}>
      <div className="workshop-template">
        <WorkshopBanner title={workshop.title} img={workshop.backgroundImage} />
        <Description
          text={workshop.description}
          img={workshop.descriptionImage}
        />
        <Gallery images={workshop.gallery} />
      </div>
    </PageBackground>
  );
};
