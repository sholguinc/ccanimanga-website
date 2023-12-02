import { Text } from '@/components/atoms';

import { IAboutUsSection } from '@/models';

export const AboutUsSection = ({
  title,
  text,
  image,
  reverse,
  className,
}: IAboutUsSection) => {
  const reverseSection = reverse ? 'reverse' : '';

  return (
    <div className={`about-us-section__wrapper ${className}`}>
      <div className={`about-us-section ${reverseSection}`}>
        <div className="about-us-section__content">
          <Text
            size="custom"
            color="black"
            weight="semi-bold"
            family="quicksand"
            className="about-us-section__title"
          >
            {title}
          </Text>
          <Text size="custom" className="about-us-section__description">
            {text}
          </Text>
        </div>
        <div className="about-us-section__figure">
          <div className="about-us-section__circle-container">
            <div className="about-us-section__circle">
              <img
                src={image}
                alt={title}
                loading="eager"
                className="about-us-section__image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
