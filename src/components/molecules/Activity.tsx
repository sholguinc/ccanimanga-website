import { Link } from 'react-router-dom';

import { Text } from '@/components/atoms';
import { IActivity } from '@/models';

export const Activity = ({ data }: IActivity) => {
  return (
    <Link to={data.path} className={`activity ${data.name}`}>
      <figure className="activity__figure">
        <img src={data.background} alt={data.name} className="activity__img" />
      </figure>

      <div className="activity__name">
        <Text size="xx-large" weight="semi-bold">
          {data.name}
        </Text>
      </div>
    </Link>
  );
};
