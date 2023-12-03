// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { ILazyImage } from '@/models';

import Blur from '@/assets/blur.jpg';

import 'react-lazy-load-image-component/src/effects/blur.css';

export const LazyImage = ({ src, alt, ...props }: ILazyImage) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      placeholderSrc={Blur}
      height="100%"
      width="100%"
      {...props}
    />
  );
};
