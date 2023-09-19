import { ITextInput } from '@/models';

export const Text = ({
  type = 'primary',
  size = 'medium',
  color,
  bold = false,
  children,
}: ITextInput) => {
  const classNames = ['text', type, size, color ?? ''];

  return (
    <p className={classNames.join(' ')} data-bold={bold}>
      {children}
    </p>
  );
};
