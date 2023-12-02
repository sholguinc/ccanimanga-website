import { ISlide, FixedLengthArray } from '@/models';
import { imageStorage } from '@/data';

const baseUrl = imageStorage + '/slider';
export const slides: FixedLengthArray<ISlide, 4> = [
  {
    alt: 'slide-01',
    src: baseUrl + '/01.jpg',
  },
  {
    alt: 'slide-02',
    src: baseUrl + '/02.jpg',
  },
  {
    alt: 'slide-03',
    src: baseUrl + '/03.jpg',
  },
  {
    alt: 'slide-04',
    src: baseUrl + '/04.jpg',
  },
];
