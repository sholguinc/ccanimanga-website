import { IBackground } from '@/models';

export const Background = ({
  children,
  src,
  alt,
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
