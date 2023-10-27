import { PageBackground } from '@/components/organisms';

import { IWorkshopTemplate } from '@/models';

export const WorkshopTemplate = ({ workshop }: IWorkshopTemplate) => {
  return (
    <PageBackground src={workshop.backgroundImage} alt={workshop.name}>
      <div className="workshop-template">{workshop.name}</div>
    </PageBackground>
  );
};
