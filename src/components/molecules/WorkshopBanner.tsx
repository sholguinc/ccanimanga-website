import { Text } from '@/components/atoms';

import { IWorkshopBanner } from '@/models';

export const WorkshopBanner = ({ title, img }: IWorkshopBanner) => {
  return (
    <div className="workshop-banner">
      <img src={img} alt={title} className="workshop-banner__background" />
      <Text
        size="custom"
        family="quicksand"
        color="white"
        weight="semi-bold"
        className="workshop-banner__title"
      >
        {title}
      </Text>
    </div>
  );
};
