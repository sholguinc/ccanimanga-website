import { useContext } from 'react';

import { ICardImage } from '@/models';
import { LightBoxContext } from '@/context';

export const CardImage = ({ src, alt }: ICardImage) => {
  const { setOpen } = useContext(LightBoxContext);

  return (
    <div className="card-image">
      <img src={src} alt={alt} className="card-image__img" />
      <div className="card-image__plus" onClick={() => setOpen(true)}>
        <div className="card-image__plus__horizontal" />
        <div className="card-image__plus__vertical" />
      </div>
    </div>
  );
};
