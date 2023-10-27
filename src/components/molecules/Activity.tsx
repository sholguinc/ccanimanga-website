import { Text, Button, Background } from '@/components/atoms';

import { IActivity } from '@/models';

export const Activity = ({ activity }: IActivity) => {
  return (
    <div className="activity">
      <Background
        src={activity.background}
        alt={activity.name}
        brightness={0.5}
      >
        <div className="activity__content">
          <Text
            family="hiro-misake"
            color="white"
            size="custom"
            className="activity__name"
          >
            {activity.name}
          </Text>
          <Text
            family="quicksand"
            color="white"
            size="custom"
            className="activity__description"
          >
            {activity.description}
          </Text>
          <Button to={activity.path} size="x-large" />
        </div>
      </Background>
    </div>
  );
};
