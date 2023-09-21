import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import { MenuContext } from '@/context';

export const AngleUp = () => {
  const { scrollableNodeRef } = useContext(MenuContext);

  const scrollBack = (): void => {
    scrollableNodeRef?.current?.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="angle-up">
      <a onClick={scrollBack}>
        <div className="angle-up__container">
          <FontAwesomeIcon icon={faAngleUp} className="angle-up__icon" />
        </div>
      </a>
    </div>
  );
};
