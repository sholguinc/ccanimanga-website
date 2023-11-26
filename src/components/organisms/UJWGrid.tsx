import { useContext } from 'react';

import { Text } from '@/components/atoms';

import { IUJWGrid } from '@/models';
import { UJWContext } from '@/context';

export const UJWGrid = ({ days }: IUJWGrid) => {
  const { setDay } = useContext(UJWContext);

  return (
    <section className="ujw-grid">
      {days.map((day, index) => (
        <div key={index} className="ujw-day" onClick={() => setDay(day)}>
          <figure className="ujw-day__figure">
            <img src={day.image} alt={day.name} className="ujw-day__img" />
          </figure>

          <div className="ujw-day__name">
            <Text size="xx-large" weight="semi-bold" color="white">
              {day.name}
            </Text>
          </div>
        </div>
      ))}
    </section>
  );
};
