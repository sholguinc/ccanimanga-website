import { Text } from '@/components/atoms';
import { Activity } from '@/components/molecules';

import { activities as activitiesFixed } from '@/data';
import { IActivityData } from '@/models';

import Stroke from '@/assets/stroke.svg?react';

export const Activities = () => {
  const activities = activitiesFixed as IActivityData[];

  return (
    <div className="activities">
      <div className="header__container">
        <Stroke className="activities__stroke stroke-header-top" />
        <div className="activities__header">
          <Text
            size="custom"
            color="black"
            weight="semi-bold"
            family="hiro-misake"
            className="activities__title"
          >
            Lo que hacemos:
          </Text>
        </div>
        <Stroke className="activities__stroke stroke-header-bottom" />
      </div>
      {activities.map((activity, index) => {
        const module = index % 2;
        const parity = module == 0 ? 'odd' : 'even';

        return (
          <div className="activity__container" key={index}>
            <Activity activity={activity} />
            <Stroke className={`activities__stroke ${parity}`} />
          </div>
        );
      })}
    </div>
  );
};
