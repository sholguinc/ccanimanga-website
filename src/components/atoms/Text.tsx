import { IText } from '@/models';

export const Text = ({
  size = 'medium',
  color = 'black',
  weight = 'regular',
  family,
  transform,
  className,
  children,
}: IText) => {
  const classNames = [
    'text',
    size,
    weight,
    family ?? '',
    color ?? '',
    className ?? '',
    transform ?? '',
  ];

  return <p className={classNames.join(' ')}>{children}</p>;
};
