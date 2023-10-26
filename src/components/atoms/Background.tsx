import { IBackground } from '@/models';

export const Background = ({
  children,
  src,
  alt,
  brightness = 0.3,
}: IBackground) => {
  return (
    <div className="background__container">
      <figure
        className="background"
        style={{ filter: `brightness(${brightness})` }}
      >
        <img src={src} alt={alt} className="background__image" />
      </figure>
      <div className="background__children">{children}</div>
    </div>
  );
};
