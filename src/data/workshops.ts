import { StringKeyObject, IWorkshop } from '@/models';

const baseUrl = '/images/workshops';

export const workshops: StringKeyObject<IWorkshop> = {
  manga: {
    name: 'Manga',
    path: '/manga',
    title: 'Taller de Manga',
    backgroundImage: baseUrl + '/background/manga.jpg',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis deserunt' +
      'earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe' +
      'suscipit vero voluptatem!',
    summaryImage: baseUrl + '/summary/02.jpg',
  },
  origami: {
    name: 'Origami',
    path: '/origami',
    title: 'Taller de Origami',
    backgroundImage: baseUrl + '/background/origami.webp',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis deserunt' +
      'earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe' +
      'suscipit vero voluptatem!',
    summaryImage: baseUrl + '/summary/origami.jpeg',
  },
  shogi: {
    name: 'Shogi',
    path: '/shogi',
    title: 'Taller de Shogi',
    backgroundImage: baseUrl + '/background/shogi.jpg',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis deserunt' +
      'earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe' +
      'suscipit vero voluptatem!',
    summaryImage: baseUrl + '/summary/shogi.jpg',
  },
  papercraft: {
    name: 'Papercraft',
    path: '/papercraft',
    title: 'Taller de Papercraft',
    backgroundImage: baseUrl + '/background/papercraft.jpg',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis ' +
      'deseruntadfadf earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe',
    summaryImage: baseUrl + '/summary/papercraft.jpg',
  },
  'hama-beads': {
    name: 'Hama Beads',
    path: '/hama-beads',
    title: 'Taller de Hama-Beads',
    backgroundImage: baseUrl + '/background/papercraft.jpg',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis deserunt' +
      'earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe' +
      'suscipit vero voluptatem!',
    summaryImage: baseUrl + '/summary/papercraft.jpg',
  },
  japones: {
    name: 'Idioma Japonés',
    path: '/japones',
    title: 'Taller de Japonés',
    backgroundImage: baseUrl + '/background/papercraft.jpg',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis deserunt' +
      'earum error placeat, reprehenderit? Beatae est non sapiente. Aut et in non quis repellendus, saepe' +
      'suscipit vero voluptatem!',
    summaryImage: baseUrl + '/summary/papercraft.jpg',
  },
};
