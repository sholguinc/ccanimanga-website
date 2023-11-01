import { useState, useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { ICardImage } from '@/models';
import { LightBoxContext } from '@/context';

import Blur from '@/assets/patterns/blur.jpg';

import 'react-lazy-load-image-component/src/effects/blur.css';

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const CardImage = ({ src, alt, index }: ICardImage) => {
  const [img, setImg] = useState('');
  const [isLoading, setLoading] = useState(true);
  const { setOpenIndex } = useContext(LightBoxContext);

  // intersection observer
  const options = {
    initialInView: false,
    threshold: 0,
    triggerOnce: true,
  };
  const { ref: cardRef, inView } = useInView(options);

  // blur duration
  const blurDuration = getRandomNumber(5, 10) * 100;

  useEffect(() => {
    setTimeout(() => {
      setImg(inView ? src : '');
    }, blurDuration);
  }, [src, inView, blurDuration]);

  return (
    <div className={`card-image ${isLoading ? '' : 'loaded'}`} ref={cardRef}>
      <div className="card-image__wrapper">
        <LazyLoadImage
          src={img}
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
