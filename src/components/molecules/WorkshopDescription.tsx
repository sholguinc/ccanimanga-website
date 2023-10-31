import { Text } from '@/components/atoms';

import { IWorkshopDescription } from '@/models';

import Stroke from '@/assets/patterns/stroke.svg?react';

export const WorkshopDescription = ({ text, img }: IWorkshopDescription) => {
  return (
    <div className="workshop-description">
      <Text
        size="x-large"
        family="quicksand"
        className="workshop-description__text"
      >
        {text}
      </Text>
      <img
        src={img}
        alt="workshop-image"
        className="workshop-description__image"
      />
      <Stroke className="workshop-description__stroke" />
    </div>
  );
};
