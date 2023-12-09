import { StringKeyObject, IWorkshop } from '@/models';
import {
  imageStorage,
  mangaGallery,
  origamiGallery,
  shogiGallery,
  papercraftGallery,
  hamaBeadsGallery,
  japaneseGallery,
} from '@/data';

const baseUrl = imageStorage + '/workshops';

export const workshops: StringKeyObject<IWorkshop> = {
  manga: {
    name: 'Manga',
    path: '/talleres/manga',
    title: 'Taller de Manga',
    backgroundImage: baseUrl + '/backgrounds/manga.jpg',
    description:
      '"Manga" es el nombre por el cual se denomina a las historietas en Japón. Se trata de ' +
      'una industria inmensa que es muy importante para el país nipón y que provoca la fascinación ' +
      'de quienes no pertenecemos a esas tierras. Este estilo es uno de los más populares en ' +
      'la actualidad, llegando hasta rincones de todo el mundo e inspirando a varios jóvenes a ' +
      'adentrarse en este arte. En el taller de manga aprenderás las nociones básicas necesarias ' +
      'para empezar en el dibujo, desde las proporciones del cuerpo, las características del ' +
      'rostro, anatomía, ropas y telas, sombreado, perspectiva, etc.',
    descriptionImage: baseUrl + '/descriptions/manga.jpg',
    figure: baseUrl + '/figures/manga.png',
    figureTransform: 'scale(.8)',
    gallery: mangaGallery,
  },
  origami: {
    name: 'Origami',
    path: '/talleres/origami',
    title: 'Taller de Origami',
    backgroundImage: baseUrl + '/backgrounds/origami.jpg',
    description:
      'El origami es el arte del plegado de papel con el propósito de formar objetos bidimensionales ' +
      'y tridimensionales. El origami clásico se realiza exclusivamente con dobleces de un único trozo ' +
      'de papel. Sin embargo, existen otras técnicas que brindan nuevas posibilidades a la papiroflexia. ' +
      'El origami modular, por ejemplo, se lleva a cabo a partir del acople de diferentes piezas iguales. ' +
      'Por lo general se trata de unidades simples que se integran para generar un modelo completo que puede ' +
      'ser mucho más complejo que cada una de ellas',
    descriptionImage: baseUrl + '/descriptions/origami.jpeg',
    figure: baseUrl + '/figures/origami.png',
    figureTransform: 'translate(-5%) scale(1.2)',
    gallery: origamiGallery,
  },
  shogi: {
    name: 'Shogi',
    path: '/talleres/shogi',
    title: 'Taller de Shogi',
    backgroundImage: baseUrl + '/backgrounds/shogi.jpg',
    description:
      'El shogi es un juego de mesa de origen japonés basado en la estrategia y la táctica para dos jugadores, ' +
      'también es mundialmente conocido como ajedrez japonés. En Japón es jugado por 10 millones de personas teniendo ' +
      'un gran peso en la cultura nipona y en el resto del mundo ya son miles los que lo practican. También es un juego ' +
      'muy común visto en animes y mangas tales como Ranma, Sangatsu no Lion y muchos más. La combinación cultural, ' +
      'estratégica, de valores y de una gran comunidad que transmite el shogi, hace de este, un fabuloso juego de mesa.',
    descriptionImage: baseUrl + '/descriptions/shogi.jpg',
    figure: baseUrl + '/figures/shogi.png',
    figureTransform: 'scale(1)',
    gallery: shogiGallery,
  },
  papercraft: {
    name: 'Papercraft',
    path: '/talleres/papercraft',
    title: 'Taller de Papercraft',
    backgroundImage: baseUrl + '/backgrounds/papercraft.jpg',
    description:
      'El papercraft es la técnica con la que se pueden crear todo tipo de figuras o estructuras con cartón o cualquier ' +
      'tipo de papel, en tres dimensiones. Se diferencia del origami principalmente en que el papercraft permite cortar y ' +
      'pegar diferentes partes del material para poder montarlas y armar así la pieza. A su vez existen diferentes tipos ' +
      'de técnicas de papercraft, que se pueden combinar para lograr una mayor complejidad de las mismas. Este estilo de ' +
      'manualidad requiere de mucha paciencia, si eres un principiante, ya hay ciertos trabajos que se encuentran ' +
      'mucho por internet y que son buenas opciones para ir puliendo tus habilidades.',
    descriptionImage: baseUrl + '/descriptions/papercraft.jpg',
    figure: baseUrl + '/figures/papercraft.png',
    figureTransform: 'scale(1)',
    gallery: papercraftGallery,
  },
  'hama-beads': {
    name: 'Hama Beads',
    path: '/talleres/hama-beads',
    title: 'Taller de Hama-Beads',
    backgroundImage: baseUrl + '/backgrounds/hama-beads.png',
    description:
      'Las "hama beads" son unas pequeñas fichas de plástico con forma cilíndrica y que, con el calor de una plancha, se ' +
      'funden solidificando la figura que hemos formado con estas piezas. La finalidad de esta manualidad es crear ' +
      'dibujos en formato "pixel art" en el que cada ficha Hama coincide con un píxel. Las fichas se encajan sobre una ' +
      'placa con clavijas que se conoce como "pegboard", donde se quedan fijas para ir formando poco a poco el dibujo. Es ' +
      'una actividad relativamente simple, pero justo por eso muy popular, pues la complejidad depende únicamente de lo que ' +
      'se proponga uno mismo.',
    descriptionImage: baseUrl + '/descriptions/hama-beads.jpg',
    figure: baseUrl + '/figures/hama-beads.png',
    figureTransform: 'translateY(-5%)',
    gallery: hamaBeadsGallery,
  },
  japones: {
    name: 'Idioma Japonés',
    path: '/talleres/japones',
    title: 'Taller de Japonés',
    backgroundImage: baseUrl + '/backgrounds/japones.png',
    description:
      'El idioma es parte esencial de la identidad cultural de un país, su importancia va más allá de ser una herramienta ' +
      'de comunicación. La lengua nos ayuda también a comprender la historia y las costumbres de un pueblo, así como su ' +
      'manera de pensar y expresarse. Diversas curiosidades hacen del japonés un idioma tan notable y único, ya que no ' +
      'comparte raíces con ninguna otra lengua. Cuatro sistemas de escritura pueden ser utilizados en Japón: "Hiragana" que es ' +
      'silábico y sencillo; "Katakana" que sirve para escribir palabras extranjeras; "Kanji" el cual está basado en los ideogramas ' +
      'chinos y "Romaji" que es usado en la transcripción fonética del japonés para el alfabeto latino.',
    descriptionImage: baseUrl + '/descriptions/japones.png',
    figure: baseUrl + '/figures/japones.png',
    figureTransform: 'scale(1.25)',
    gallery: japaneseGallery,
  },
};
