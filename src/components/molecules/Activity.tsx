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
          <Text>{activity.name}</Text>
          <Text>{activity.description}</Text>
          <Button to={activity.path} />
        </div>
      </Background>
    </div>
  );
};
