import { IActivityData, FixedLengthArray } from '@/models';
import { imageStorage } from '@/data';

const baseUrl = imageStorage + '/activities';

export const activities: FixedLengthArray<IActivityData, 4> = [
  {
    name: 'Talleres',
    description: 'de manga, origami, shogi, etc.',
    path: '/talleres',
    background: baseUrl + '/workshops.jpg',
  },
  {
    name: 'Proyecciones',
    description: 'de series y películas anime',
    path: '/proyecciones',
    background: baseUrl + '/screenings.jpg',
  },
  {
    name: 'UNI Japan Week',
    description: 'nuestro mayor evento anual',
    path: '/uni-japan-week',
    background: baseUrl + '/uni-japan-week.jpg',
  },
  {
    name: 'Otras Actividades',
    description: 'dentro y fuera de la UNI',
    path: '/otras-actividades',
    background: baseUrl + '/other-activities.jpg',
  },
];
