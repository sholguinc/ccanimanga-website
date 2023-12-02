import { useState, useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { ICardImage } from '@/models';
import { LightBoxContext } from '@/context';

import Blur from '@/assets/blur.jpg';

import 'react-lazy-load-image-component/src/effects/blur.css';

export const CardImage = ({ src, alt, index }: ICardImage) => {
  const [isLoading, setLoading] = useState(true);
  const { setOpenIndex } = useContext(LightBoxContext);

  return (
    <div className={`card-image ${isLoading ? '' : 'loaded'}`}>
      <div className="card-image__wrapper">
        <LazyLoadImage
          src={src}
          alt={alt}
          effect="blur"
          placeholderSrc={Blur}
          height="100%"
          width="100%"
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
