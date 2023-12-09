import { IUJWDay } from '@/models';
import {
  imageStorage,
  musicNoHiGallery,
  koeNoHiGallery,
  bunkaNoHiGallery,
  animeNoHiGallery,
  symphonyNoHiGallery,
} from '@/data';

const baseUrl = imageStorage + '/uni-japan-week';

export const UJWDays: IUJWDay[] = [
  {
    name: 'Music no Hi',
    image: baseUrl + '/music-no-hi.jpg',
    gallery: musicNoHiGallery,
  },
  {
    name: 'Koe no Hi',
    image: baseUrl + '/koe-no-hi.jpg',
    gallery: koeNoHiGallery,
  },
  {
    name: 'Bunka no Hi',
    image: baseUrl + '/bunka-no-hi.jpg',
    gallery: bunkaNoHiGallery,
  },
  {
    name: 'Anime no Hi',
    image: baseUrl + '/anime-no-hi.jpg',
    gallery: animeNoHiGallery,
  },
  {
    name: 'Symphony no Hi',
    image: baseUrl + '/symphony-no-hi.jpg',
    gallery: symphonyNoHiGallery,
  },
];
