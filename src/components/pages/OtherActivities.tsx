import { ActivityTemplate, ImagesLoadedTemplate } from '@/components/templates';

import { IActivityTemplate, IBackground, IDescription } from '@/models';
import { OtherActivitiesBanner, screeningsGallery } from '@/data';

const OtherActivities = () => {
  const props: IActivityTemplate = {
    name: 'Otras Actividades',
    background: {
      src: OtherActivitiesBanner,
      alt: 'other-activities-background',
      brightness: 0.8,
    } as IBackground,
    description: {
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa doloremque ' +
        'eveniet ex non velit? Delectus eaque excepturi impedit in iste recusandae. ' +
        'Commodi cumque incidunt placeat. Commodi consectetur quo sequi ut?',
      img: OtherActivitiesBanner,
    } as IDescription,
    gallery: screeningsGallery,
  };

  return (
    <ImagesLoadedTemplate>
      <ActivityTemplate {...props} />
    </ImagesLoadedTemplate>
  );
};

export default OtherActivities;
