import { StringKeyObject, IWorkshop } from '@/models';
import { imageStorage, mangaGallery } from '@/data';

const baseUrl = imageStorage + '/workshops';

export const workshops: StringKeyObject<IWorkshop> = {
  manga: {
    name: 'Manga',
    path: '/talleres/manga',
    title: 'Taller de Manga',
    backgroundImage: baseUrl + '/backgrounds/manga.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis deserunt' +
      'earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe' +
      'suscipit vero voluptatem!',
    descriptionImage: baseUrl + '/descriptions/manga.jpg',
    figure: baseUrl + '/figures/manga.png',
    figureTransform: 'scale(.8)',
    gallery: mangaGallery,
  },
  origami: {
    name: 'Origami',
    path: '/talleres/origami',
    title: 'Taller de Origami',
    backgroundImage: baseUrl + '/backgrounds/origami.webp',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis deserunt' +
      'earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe' +
      'suscipit vero voluptatem!',
    descriptionImage: baseUrl + '/descriptions/origami.jpeg',
    figure: baseUrl + '/figures/origami.png',
    figureTransform: 'translate(-5%) scale(1.2)',
    gallery: mangaGallery,
  },
  shogi: {
    name: 'Shogi',
    path: '/talleres/shogi',
    title: 'Taller de Shogi',
    backgroundImage: baseUrl + '/backgrounds/shogi.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis deserunt' +
      'earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe' +
      'suscipit vero voluptatem!',
    descriptionImage: baseUrl + '/descriptions/shogi.jpg',
    figure: baseUrl + '/figures/shogi.png',
    figureTransform: 'scale(1)',
    gallery: mangaGallery,
  },
  papercraft: {
    name: 'Papercraft',
    path: '/talleres/papercraft',
    title: 'Taller de Papercraft',
    backgroundImage: baseUrl + '/backgrounds/papercraft.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis ' +
      'deseruntadfadf earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe',
    descriptionImage: baseUrl + '/descriptions/papercraft.jpg',
    figure: baseUrl + '/figures/papercraft.png',
    figureTransform: 'scale(1)',
    gallery: mangaGallery,
  },
  'hama-beads': {
    name: 'Hama Beads',
    path: '/talleres/hama-beads',
    title: 'Taller de Hama-Beads',
    backgroundImage: baseUrl + '/backgrounds/papercraft.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis deserunt' +
      'earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe' +
      'suscipit vero voluptatem!',
    descriptionImage: baseUrl + '/descriptions/papercraft.jpg',
    figure: baseUrl + '/figures/hama-beads.png',
    figureTransform: 'translateY(-5%)',
    gallery: mangaGallery,
  },
  japones: {
    name: 'Idioma Japonés',
    path: '/talleres/japones',
    title: 'Taller de Japonés',
    backgroundImage: baseUrl + '/backgrounds/papercraft.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis deserunt' +
      'earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe' +
      'suscipit vero voluptatem!',
    descriptionImage: baseUrl + '/descriptions/papercraft.jpg',
    figure: baseUrl + '/figures/japones.png',
    figureTransform: 'scale(1.25)',
    gallery: mangaGallery,
  },
};
