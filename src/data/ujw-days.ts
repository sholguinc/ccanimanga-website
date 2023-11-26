import { IUJWDay } from '@/models';

import { musicGallery } from '@/data';

const baseUrl = '/images/uni-japan-week';

export const UJWDays: IUJWDay[] = [
  {
    name: 'Music no Hi',
    image: baseUrl + '/music-no-hi.jpg',
    gallery: musicGallery,
  },
  {
    name: 'Koe no Hi',
    image: baseUrl + '/koe-no-hi.jpg',
    gallery: musicGallery,
  },
  {
    name: 'Bunka no Hi',
    image: baseUrl + '/bunka-no-hi.jpg',
    gallery: musicGallery,
  },
  {
    name: 'Anime no Hi',
    image: baseUrl + '/anime-no-hi.webp',
    gallery: musicGallery,
  },
  {
    name: 'Symphony no Hi',
    image: baseUrl + '/symphony-no-hi.jpg',
    gallery: musicGallery,
  },
];
