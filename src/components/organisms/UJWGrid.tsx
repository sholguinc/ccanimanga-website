import { useContext } from 'react';

import { Text } from '@/components/atoms';

import { IUJWGrid } from '@/models';
import { UJWContext } from '@/context';

export const UJWGrid = ({ days }: IUJWGrid) => {
  const { setDayLoading } = useContext(UJWContext);

  return (
    <section className="ujw-grid">
      {days.map((day, index) => (
        <div key={index} className="ujw-day" onClick={() => setDayLoading(day)}>
          <figure className="ujw-day__figure">
            <img src={day.image} alt={day.name} className="ujw-day__img" />
          </figure>
          <div className="ujw-day__name-container">
            <Text
              size="custom"
              weight="semi-bold"
              color="white"
              family="quicksand"
              className="ujw-day__name"
            >
              {day.name}
            </Text>
          </div>
        </div>
      ))}
    </section>
  );
};
