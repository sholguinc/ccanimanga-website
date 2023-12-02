import { Text, DelayLink } from '@/components/atoms';
import { IButton } from '@/models';

import Arrow from '@/assets/arrow.svg?react';

export const Button = ({
  text = 'Ver más',
  size = 'medium',
  invert = false,
  to,
  className,
}: IButton) => {
  return (
    <DelayLink
      to={to}
      className={`button ${size} ${className}`}
      data-invert={invert}
    >
      <Text size={size} weight="bold">
        {text}
      </Text>
      <Arrow className="arrow" />
    </DelayLink>
  );
};
