import { IActivityData, FixedLengthArray } from '@/models';

const baseUrl = '/images/home/activities';

export const activitiesGrid: FixedLengthArray<IActivityData, 5> = [
  {
    name: 'Manga',
    path: '/talleres/manga',
    background: baseUrl + '/manga.png',
  },
  {
    name: 'Origami',
    path: '/talleres/origami',
    background: baseUrl + '/origami.jpg',
  },
  {
    name: 'Shogi',
    path: '/talleres/shogi',
    background: baseUrl + '/shogi.jpg',
  },
  {
    name: 'Papercraft',
    path: '/talleres/papercraft',
    background: baseUrl + '/papercraft.png',
  },
  {
    name: 'Otros',
    path: '/talleres',
    background: baseUrl + '/otros.png',
  },
];
