import { IBackground } from '@/models';

export const PageBackground = ({
  children,
  src,
  alt,
  brightness = 0.3,
}: IBackground) => {
  return (
    <>
      <figure
        className="page-background"
        style={{ filter: `brightness(${brightness})` }}
      >
        <img src={src} alt={alt} className="page-background__image" />
      </figure>
      {children}
    </>
  );
};
