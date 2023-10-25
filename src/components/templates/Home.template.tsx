import { Slider, InfoCard } from '@/components/organisms';
import { slides } from '@/data';

import Anigirl from '@/assets/images/artist.png';

export const HomeTemplate = () => {
  return (
    <>
      <Slider slides={slides} />
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
      <p style={{ width: '20px' }}>
        , eum excepturi laborum ratione! Commodi dicta dolores eius et incidunt
        laborum maxime mollitia nobis, nulla sed voluptate voluptatem! Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur ea
        eius, eum excepturi laborum ratione! Commodi dicta dolores eius et
        incidunt laborum maxime mollitia nobis, nulla sed voluptate voluptatem!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
        consectetur ea eius, eum excepturi laborum ratione! Commodi dicta
        dolores eius et incidunt laborum maxime mollitia nobis, nulla sed
        voluptate voluptatem! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Atque consectetur ea eius, eum excepturi laborum
        ratione! Commodi dicta dolores eius et incidunt laborum maxime mollitia
        nobis, nulla sed voluptate voluptatem!vv Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Atque consectetur ea eius, eum excepturi
        laborum ratione! Commodi dicta dolores eius et incidunt laborum maxime
        mollitia nobis, nulla sed voluptate voluptatem! Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Atque consectetur ea eius, eum
        excepturi laborum ratione! Commodi dicta dolores eius et incidunt
        laborum maxime mollitia nobis, nulla sed voluptate voluptatem! Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur ea
        eius, eum excepturi laborum ratione! Commodi dicta dolores eius et
        incidunt laborum maxime mollitia nobis, nulla sed voluptate voluptatem!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
        consectetur ea eius, eum excepturi laborum ratione! Commodi dicta
        dolores eius et incidunt laborum maxime mollitia nobis, nulla sed
        voluptate voluptatem!
      </p>
    </>
  );
};
