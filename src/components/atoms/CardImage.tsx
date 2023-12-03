import { useState, useContext } from 'react';

import { LazyImage } from '@/components/atoms';
import { ICardImage } from '@/models';
import { LightBoxContext } from '@/context';

export const CardImage = ({ src, alt, index }: ICardImage) => {
  const [isLoading, setLoading] = useState(true);
  const { setOpenIndex } = useContext(LightBoxContext);

  return (
    <div className={`card-image ${isLoading ? '' : 'loaded'}`}>
      <div className="card-image__wrapper">
        <LazyImage
          src={src}
          alt={alt}
          className="card-image__img"
          onLoad={() => setLoading(false)}
        />
      </div>
      <div className="card-image__plus" onClick={() => setOpenIndex(index)}>
        <div className="card-image__plus__horizontal" />
        <div className="card-image__plus__vertical" />
      </div>
    </div>
  );
};
