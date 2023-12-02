import { Text } from '@/components/atoms';

import { IBanner } from '@/models';

export const Banner = ({ title, img, brightness = 0.5 }: IBanner) => {
  return (
    <div className="banner">
      {img && (
        <img
          src={img}
          alt={title}
          loading="eager"
          style={{ filter: `brightness(${brightness})` }}
          className="banner__image"
        />
      )}
      <Text
        size="custom"
        family="hiro-misake"
        color="white"
        className="banner__title"
      >
        {title}
      </Text>
    </div>
  );
};
