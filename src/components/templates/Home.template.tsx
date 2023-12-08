import { Logos } from '@/components/molecules';
import { Slider, InfoCard, Activities } from '@/components/organisms';

import { Anigirl } from '@/data';

export const HomeTemplate = () => {
  return (
    <>
      <Slider />
      <InfoCard
        title="Quienes Somos :"
        image={Anigirl}
        text="El Centro Cultural Anime y Manga (CCAM) es una organización de la
          Universidad Nacional de Ingeniería (UNI) que tiene como objetivo la
          difusión de la cultura japonesa en sus distintas facetas, desde su
          idioma hasta su música, desde el anime hasta al shogi. Llevamos 15 años
          desarrollando diversas actividades y aumentando nuestro alcance tanto 
          dentro como fuera de nuestra universidad. ¿Eres fan del manga-anime?
          te invitamos a participar en nuestros talleres y proyecciones, así como
          a formar parte de esta agrupación."
        to="/nosotros"
        className="home__about-us"
      />
      <Activities />
      <Logos />
    </>
  );
};
