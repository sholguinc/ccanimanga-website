import { Activity } from '@/components/molecules';

import { activities as activitiesFixed } from '@/data';
import { IActivityData } from '@/models';

export const Activities = () => {
  const activities = activitiesFixed as IActivityData[];

  return (
    <div className="activities">
      {activities.map((activity, index) => (
        <Activity activity={activity} key={index} />
      ))}
    </div>
  );
};
