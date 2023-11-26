import { ILogo } from '@/models';

const baseUrl = '/logos';

export const logosUNI: ILogo[] = [
  {
    name: 'CCAM',
    img: baseUrl + '/ccam.png',
    transform: 'scale(1.6)',
  },
  {
    name: 'Centro Cultural UNI',
    img: baseUrl + '/centro-cultural-uni.png',
  },
  {
    name: 'RSDS',
    img: baseUrl + '/RSDSUNI.png',
    transform: 'scale(1.6)',
  },
  {
    name: 'UNI',
    img: baseUrl + '/logo-uni.png',
  },
];

const otherLogos: ILogo[] = [
  {
    name: 'Museo UNI',
    img: baseUrl + '/logo-museo.png',
  },
  {
    name: '150 años JP',
    img: baseUrl + '/150-aniversario-JPN.png',
    transform: 'scale(1.6)',
  },
  {
    name: 'Berioska',
    img: baseUrl + '/berioska.png',
  },
  {
    name: 'Wacom',
    img: baseUrl + '/wacom.png',
  },
  {
    name: 'Atodivarius',
    img: baseUrl + '/Atodivarius.jpg',
  },
  {
    name: 'Faber Castell',
    img: baseUrl + '/faber-castell.png',
  },
  {
    name: 'Ukato no Sekai',
    img: baseUrl + '/ukato.png',
  },
  {
    name: 'CEAN',
    img: baseUrl + '/CEAN.png',
  },
  {
    name: 'Satori',
    img: baseUrl + '/satori.png',
  },
  {
    name: 'Club de Cine FAUA',
    img: baseUrl + '/club-cine-faua.png',
  },
];

export const logosUJW: ILogo[] = [...logosUNI, ...otherLogos];
