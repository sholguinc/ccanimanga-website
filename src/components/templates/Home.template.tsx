import { Logos } from '@/components/molecules';
import { Slider, InfoCard, Activities } from '@/components/organisms';

import { logosUNI } from '@/data';
import Anigirl from '@/assets/images/artist.png';

export const HomeTemplate = () => {
  return (
    <>
      <Slider />
      <InfoCard
        title="Quienes Somos :"
        image={Anigirl}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
        consectetur ea eius, eum excepturi laborum ratione! Commodi dicta
        dolores eius et incidunt laborum maxime mollitia nobis, nulla sed
        voluptate voluptatem! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Atque consectetur ea eius, eum excepturi laborum
        ratione! Commodi dicta dolores eius et incidunt laborum maxime mollitia
        nobis, nulla sed voluptate voluptatem! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Atque consectetur ea eius, eum excepturi
        laborum ratione! Commodi dicta dolores eius et incidunt laborum maxime
        mollitia nobis, nulla sed voluptate voluptatem! Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Atque consectetur ea eius"
        to="/nosotros"
      />
      <Activities />
      <Logos logos={logosUNI} />
    </>
  );
};
