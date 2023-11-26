import { useState } from 'react';

import { Text } from '@/components/atoms';
import { Gallery, UJWGrid } from '@/components/organisms';

import { UJWDays } from '@/data';
import { IUJWDay } from '@/models';

import Stroke from '@/assets/patterns/stroke.svg?react';

export const UJWGallery = () => {
  const [day] = useState<IUJWDay>(UJWDays[0]);

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
        <div
          className="ujw-gallery"
          style={{
            background: `url(${day.image})`,
            backgroundAttachment: 'fixed',
          }}
        >
          <Gallery images={day.gallery} title={day.name} />
        </div>
        <Stroke className="ujw-gallery__stroke even" />
      </div>
    </div>
  );
};
