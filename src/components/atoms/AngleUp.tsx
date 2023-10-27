import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import { ScrollContext } from '@/context';

export const AngleUp = () => {
  const { scrollBack } = useContext(ScrollContext);

  return (
    <div className="angle-up">
      <a onClick={() => scrollBack('smooth')}>
        <div className="angle-up__container">
          <FontAwesomeIcon icon={faAngleUp} className="angle-up__icon" />
        </div>
      </a>
    </div>
  );
};
