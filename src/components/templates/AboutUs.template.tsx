import { AboutUsSection } from '@/components/molecules';
import { Banner } from '@/components/organisms';

import { AboutUsBanner, CCAMGroup, UNI, Origin, Community } from '@/data';

export const AboutUsTemplate = () => {
  return (
    <>
      <Banner title="Quiénes Somos" img={AboutUsBanner} brightness={0.75} />
      <AboutUsSection
        title="Centro Cultural Anime y Manga"
        text="Como nuesto nombre indica, somos un centro cultural, un organismo
          oficialmente reconocido por la UNI y parte de la Dirección de Cultura 
          de la propia universidad. El CCAM es una entidad abierta a CUALQUIER 
          PERSONA interesada, no necesariamente de la UNI, que desee aportar de 
          alguna manera a la agrupación. A pesar de que el CCAM no demanda 
          inversión económica, requerirá la inversión de tu tiempo.
        "
        image={CCAMGroup}
      />
      <AboutUsSection
        title="Ubicación"
        text='La mayoría de nuestras actividades, se realizan en nuestra casa de
          estudios, la Universidad Nacional de Ingeniería (UNI). Ubicada en la
          Avenida Túpac Amaru 210, Rímac 15333 - Lima - Perú. Asímismo, nuestro
          local se encuentra en el sótano del pabellón central, frente al
          "Petroparque". Puedes encontrarnos allí durante la mayoría de días
          de la semana.'
        image={UNI}
        reverse={true}
      />
      <AboutUsSection
        title="Historia"
        text="El CCAM se formo a comienzos del año 2008 gracias a la participación
          de varios estudiantes de la UNI que, al igual que muchos de ustedes, compartían
          el gusto por la cultura nipona (ya sea en su historia, música o sus
          productos) sin embargo, se decidió enfocar el Centro Cultural a una
          temática en especial y que era de interés común a todos los miembros,
          la cultura manga-anime. Con el paso del tiempo nos aventuramos a aprender
          y difundir varias actividades orientadas a las artes plásticas,
          agregando una nueva perspectiva al elenco."
        image={Origin}
      />
      <AboutUsSection
        title="Comunidad"
        text="En nuestros 15 años de historia, el CCAM ha pasado por una gran
          cantidad de miembros, participantes de talleres, estudiantes universitarios,
          profesores, asistentes a los talleres, invitados, entre otros. Estos conforman
          a la comunidad del elenco, con los cuales se mantiene contacto para poder
          mantener la actividad y el legado a través de los años."
        image={Community}
        reverse={true}
        className="last-section"
      />
    </>
  );
};
