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
        'Convocatorias de miembros, presentaciones en ferias, bienvenidas de ingresantes ' +
        'exposiciones de artes y manualidades, etc. El CCAM siempre está dispuesto a formar ' +
        'parte de alguna actividad a la que sea invitado, ya sea dentro o fuera de la UNI. ' +
        'Nuestro objetivo es llegar a la mayor cantidad de personas posibles y aumentar los ' +
        'lugares en los que nos damos a conocer es una buena forma de hacerlo.',
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
