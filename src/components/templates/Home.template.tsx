import { Button } from '@/components/atoms';
import { Slider } from '@/components/organisms';

import { homeSlides } from '@/data/sliders.ts';

export const HomeTemplate = () => {
  return (
    <div className="home-template">
      <section className="home-template__slider">
        <Slider slides={homeSlides} />
      </section>
      <Button text="Ir a Inicio" size="xx-large" redirectTo={'/'} />
      <p style={{ width: '20px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
        consectetur ea eius, eum excepturi laborum ratione! Commodi dicta
        dolores eius et incidunt laborum maxime mollitia nobis, nulla sed
        voluptate voluptatem! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Atque consectetur ea eius, eum excepturi laborum
        ratione! Commodi dicta dolores eius et incidunt laborum maxime mollitia
        nobis, nulla sed voluptate voluptatem! Lorem ipsum dolor sit amet,
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
    </div>
  );
};
