import { IBackground } from '@/models';

import Pattern from '@/assets/background/pattern.png';

export const Background = ({
  children,
  src = Pattern,
  alt = 'background',
  brightness = 1,
}: IBackground) => {
  return (
    <>
      <figure
        className="background"
        style={{ filter: `brightness(${brightness})` }}
      >
        <img src={src} alt={alt} className="background__image" />
      </figure>
      {children}
    </>
  );
};
