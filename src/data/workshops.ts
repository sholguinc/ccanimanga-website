import { StringKeyObject, IWorkshop } from '@/models';

import { mangaGallery } from '@/data';

const baseUrl = '/images/workshops';

export const workshops: StringKeyObject<IWorkshop> = {
  manga: {
    name: 'Manga',
    path: '/talleres/manga',
    title: 'Taller de Manga',
    backgroundImage: baseUrl + '/background/manga.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis deserunt' +
      'earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe' +
      'suscipit vero voluptatem!',
    descriptionImage: baseUrl + '/description/manga.jpg',
    figure: baseUrl + '/figure/manga.png',
    gallery: mangaGallery,
  },
  origami: {
    name: 'Origami',
    path: '/talleres/origami',
    title: 'Taller de Origami',
    backgroundImage: baseUrl + '/background/origami.webp',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis deserunt' +
      'earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe' +
      'suscipit vero voluptatem!',
    descriptionImage: baseUrl + '/description/origami.jpeg',
    figure: baseUrl + '/figure/origami.png',
    gallery: mangaGallery,
  },
  shogi: {
    name: 'Shogi',
    path: '/talleres/shogi',
    title: 'Taller de Shogi',
    backgroundImage: baseUrl + '/background/shogi.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis deserunt' +
      'earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe' +
      'suscipit vero voluptatem!',
    descriptionImage: baseUrl + '/description/shogi.jpg',
    figure: baseUrl + '/figure/shogi.png',
    gallery: mangaGallery,
  },
  papercraft: {
    name: 'Papercraft',
    path: '/talleres/papercraft',
    title: 'Taller de Papercraft',
    backgroundImage: baseUrl + '/background/papercraft.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis ' +
      'deseruntadfadf earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe',
    descriptionImage: baseUrl + '/description/papercraft.jpg',
    figure: baseUrl + '/figure/papercraft.png',
    gallery: mangaGallery,
  },
  'hama-beads': {
    name: 'Hama Beads',
    path: '/talleres/hama-beads',
    title: 'Taller de Hama-Beads',
    backgroundImage: baseUrl + '/background/papercraft.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis deserunt' +
      'earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe' +
      'suscipit vero voluptatem!',
    descriptionImage: baseUrl + '/description/papercraft.jpg',
    figure: baseUrl + '/figure/hama-beads.png',
    gallery: mangaGallery,
  },
  japones: {
    name: 'Idioma Japonés',
    path: '/talleres/japones',
    title: 'Taller de Japonés',
    backgroundImage: baseUrl + '/background/papercraft.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis deserunt' +
      'earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe' +
      'suscipit vero voluptatem!',
    descriptionImage: baseUrl + '/description/papercraft.jpg',
    figure: baseUrl + '/figure/japones.png',
    gallery: mangaGallery,
  },
};
