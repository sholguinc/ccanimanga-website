import { ActivityTemplate } from '@/components/templates';

import { IActivityTemplate, IBackground, IDescription } from '@/models';
import { screeningsGallery } from '@/data';

import OtherActivitiesBackground from '@/assets/images/other-activities.jpg';

export const OtherActivities = () => {
  const props: IActivityTemplate = {
    name: 'Otras Actividades',
    background: {
      src: OtherActivitiesBackground,
      alt: 'other-activities-background',
      brightness: 0.8,
    } as IBackground,
    description: {
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa doloremque ' +
        'eveniet ex non velit? Delectus eaque excepturi impedit in iste recusandae. ' +
        'Commodi cumque incidunt placeat. Commodi consectetur quo sequi ut?',
      img: OtherActivitiesBackground,
    } as IDescription,
    gallery: screeningsGallery,
  };

  return <ActivityTemplate {...props} />;
};
