import { useContext } from 'react';

import { Text, Background } from '@/components/atoms';
import { UJWLoading } from '@/components/molecules';
import { Gallery, UJWGrid } from '@/components/organisms';

import { UJWDays } from '@/data';
import { UJWContext } from '@/context';

import Stroke from '@/assets/stroke.svg?react';

export const UJWGallery = () => {
  const { day } = useContext(UJWContext);

  return (
    <div className="ujw-gallery__container">
      <div className="ujw-gallery-header__container">
        <Stroke className="ujw-gallery__stroke stroke-header-top" />
        <div className="ujw-gallery__header">
          <Text
            size="custom"
            color="black"
            weight="semi-bold"
            family="hiro-misake"
            className="ujw-gallery__title"
          >
            Días del evento:
          </Text>
        </div>
        <Stroke className="ujw-gallery__stroke stroke-header-bottom" />
      </div>
      <div className="ujw-gallery__section">
        <UJWGrid days={UJWDays} />
        <Stroke className="ujw-gallery__stroke odd" />
      </div>
      <div className="ujw-gallery__section">
        <div className="ujw-gallery">
          <Background alt={day.name} src={day.image}>
            <Gallery images={day.gallery} title={day.name} />
          </Background>
        </div>
        <Stroke className="ujw-gallery__stroke even" />
      </div>
      <UJWLoading />
    </div>
  );
};
