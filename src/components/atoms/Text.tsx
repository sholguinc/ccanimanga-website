import { IText } from '@/models';

export const Text = ({
  type = 'primary',
  size = 'medium',
  color,
  weight = 'regular',
  family = 'quicksand',
  transform,
  className,
  children,
}: IText) => {
  const classNames = [
    'text',
    type,
    size,
    weight,
    family,
    color ?? '',
    className ?? '',
    transform ?? '',
  ];

  return <p className={classNames.join(' ')}>{children}</p>;
};
