import { Text } from '@/components/atoms';

import { IDescription } from '@/models';

import Stroke from '@/assets/patterns/stroke.svg?react';

export const Description = ({ text, img }: IDescription) => {
  return (
    <div className="description">
      <Text size="x-large" family="quicksand" className="description__text">
        {text}
      </Text>
      <img src={img} alt="description-image" className="description__image" />
      <Stroke className="description__stroke" />
    </div>
  );
};
