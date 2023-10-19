import { Text, DelayLink } from '@/components/atoms';
import { IButton } from '@/models';

import Arrow from '@/assets/icons/arrow.svg?react';

export const Button = ({
  text = 'Ver más',
  size = 'medium',
  invert = false,
  to,
}: IButton) => {
  return (
    <DelayLink to={to} className={`button ${size}`} data-invert={invert}>
      <Text size={size} weight="bold">
        {text}
      </Text>
      <Arrow className="arrow" />
    </DelayLink>
  );
};
