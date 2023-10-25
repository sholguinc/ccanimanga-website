import { InfoCard } from '@/components/organisms';

import { IWorkshopsTemplate } from '@/models';

export const WorkshopsTemplate = ({ workshops }: IWorkshopsTemplate) => {
  return (
    <>
      {workshops.map((workshop) => (
        <InfoCard
          title={workshop.name}
          text={workshop.description}
          image={workshop.figure}
          to={workshop.path}
        />
      ))}
    </>
  );
};
