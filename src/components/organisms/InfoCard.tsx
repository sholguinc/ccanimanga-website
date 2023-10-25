import { Button, Text } from '@/components/atoms';

import { IInfoCard } from '@/models';

export const InfoCard = ({ title, text, image, to }: IInfoCard) => {
  return (
    <div className="info-card__wrapper">
      <div className="info-card">
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
          <Button to={to} size="xx-large" className="info-card__button" />
        </div>
        <div className="info-card__figure">
          <div className="info-card__circle-container">
            <div className="info-card__circle" />
          </div>
          <img src={image} alt={title} className="info-card__image" />
        </div>
      </div>
    </div>
  );
};
