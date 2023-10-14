import { useNavigate } from 'react-router-dom';

import { Text } from '@/components/atoms';
import { IButton } from '@/models';

import Arrow from '@/assets/icons/arrow.svg?react';

export const Button = ({
  text = 'Ver más',
  size = 'medium',
  invert = false,
  redirectTo,
}: IButton) => {
  const navigate = useNavigate();

  return (
    <button
      className={`button ${size}`}
      data-invert={invert}
      onClick={() => navigate(redirectTo)}
    >
      <Text size={size} weight="bold">
        {text}
      </Text>
      <Arrow className="arrow" />
    </button>
  );
};
