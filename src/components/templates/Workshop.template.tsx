import { Background } from '@/components/organisms';

import { IWorkshopTemplate } from '@/models';

export const WorkshopTemplate = ({ workshop }: IWorkshopTemplate) => {
  return (
    <Background
      src={workshop.backgroundImage}
      alt={workshop.name}
      brightness={0.3}
    >
      <div className="workshop-template">{workshop.name}</div>
    </Background>
  );
};
