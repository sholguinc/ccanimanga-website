import { ActivityTemplate } from '@/components/templates';

import { IActivityTemplate, IBackground, IDescription } from '@/models';
import { mangaGallery } from '@/data';

import ScreeningsBackground from '@/assets/images/screenings.jpg';

export const Screenings = () => {
  const props: IActivityTemplate = {
    name: 'Proyecciones',
    background: {
      src: ScreeningsBackground,
      alt: 'screenings-background',
      brightness: 0.8,
    } as IBackground,
    description: {
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa doloremque ' +
        'eveniet ex non velit? Delectus eaque excepturi impedit in iste recusandae. ' +
        'Commodi cumque incidunt placeat. Commodi consectetur quo sequi ut?',
      img: ScreeningsBackground,
    } as IDescription,
    gallery: mangaGallery,
  };

  return <ActivityTemplate {...props} />;
};
