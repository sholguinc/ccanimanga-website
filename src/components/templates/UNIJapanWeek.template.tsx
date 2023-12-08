import { LogosUJW } from '@/components/molecules';
import { Banner, InfoCard, UJWGallery } from '@/components/organisms';

import { UJWContextProvider } from '@/context';
import { UJWBanner, YukataGirl } from '@/data';

export const UNIJapanWeekTemplate = () => {
  return (
    <UJWContextProvider>
      <Banner title="UNI Japan Week" img={UJWBanner} />
      <InfoCard
        title=""
        text='La "UNI Japan Week" es un evento que nació como motivo para festejar nuestro
          decimo quinto aniversario. La ocasión requería de una serie de actos seguidos
          para formar una semana con una temática general. Cada día se enfoca en una aspecto en
          concreto de la cultura nipona con actividades organizadas por nosotros y la participación
          de varios invitados, estas incluyen: presentación de taikos, concierto de anisong, ponencia
          de la embajada de japón, torneo de shogi, función de anime, presentación de una orquesta
          sinfónica, feria de productos y comida, entre otros.'
        image={YukataGirl}
        imageTransform="translateY(10%)"
        reverse={true}
        className="ujw__description"
      />
      <UJWGallery />
      <LogosUJW />
    </UJWContextProvider>
  );
};
