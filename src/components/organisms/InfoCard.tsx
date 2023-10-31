import { useInView } from 'react-intersection-observer';

import { Button, Text } from '@/components/atoms';

import { IInfoCard } from '@/models';

export const InfoCard = ({
  title,
  text,
  image,
  to,
  reverse = false,
  className = '',
}: IInfoCard) => {
  const options = {
    initialInView: false,
    threshold: 0.4,
    triggerOnce: true,
  };

  const { ref: circleRef, inView } = useInView(options);
  const showImage = inView ? 'visible' : '';

  const reverseCard = reverse ? 'reverse' : '';

  return (
    <div className={`info-card__wrapper ${className}`}>
      <div className={`info-card ${reverseCard}`}>
        <div className="info-card__content">
          <Text
            size="custom"
            color="black"
            weight="semi-bold"
            family="hiro-misake"
            className="info-card__title"
          >
            {title}
          </Text>
          <Text size="custom" className="info-card__description">
            {text}
          </Text>
          {to && (
            <Button to={to} size="xx-large" className="info-card__button" />
          )}
        </div>
        <div className="info-card__figure">
          <div className="info-card__circle-container" ref={circleRef}>
            <div className="info-card__circle" />
          </div>
          <img
            src={image}
            alt={title}
            className={`info-card__image ${showImage}`}
          />
        </div>
      </div>
    </div>
  );
};
