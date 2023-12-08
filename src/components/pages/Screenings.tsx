import { ActivityTemplate, ImagesLoadedTemplate } from '@/components/templates';

import { IActivityTemplate, IBackground, IDescription } from '@/models';
import { ScreeningsBanner, screeningsGallery } from '@/data';

const Screenings = () => {
  const props: IActivityTemplate = {
    name: 'Proyecciones',
    background: {
      src: ScreeningsBanner,
      alt: 'screenings-background',
      brightness: 0.8,
    } as IBackground,
    description: {
      text:
        'Las proyecciones de series y películas anime son una actividad que ha estado ' +
        'presente en nuestro centro desde su creación. No hay ningún misterio, proyectamos ' +
        'filmes que consideramos deberían tener difusión o reconocimiento ya sea por un motivo ' +
        'cultural o por su importancia en el medio, estas se realizan normalmente en un ' +
        'auditorio o salón de alguna facultad. Además, realizamos sorteos y entretiempos ' +
        'para poder interactuar con los asistentes.',
      img: ScreeningsBanner,
    } as IDescription,
    gallery: screeningsGallery,
  };

  return (
    <ImagesLoadedTemplate>
      <ActivityTemplate {...props} />
    </ImagesLoadedTemplate>
  );
};

export default Screenings;
