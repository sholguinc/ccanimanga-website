import { Text, CardImage } from '@/components/atoms';
import { LightBox } from '@/components/organisms';

import { IGallery } from '@/models';
import { LightBoxContextProvider } from '@/context';

export const Gallery = ({ title = 'Galería', images }: IGallery) => {
  return (
    <LightBoxContextProvider>
      <section className="gallery">
        <Text
          size="custom"
          color="white"
          family="quicksand"
          weight="semi-bold"
          className="gallery__title"
        >
          {title}
        </Text>
        <div className="gallery__images">
          {images.map((image, index) => (
            <CardImage
              key={index}
              src={image.src}
              alt={image.alt}
              index={index}
            />
          ))}
        </div>
        <LightBox slides={images} />
      </section>
    </LightBoxContextProvider>
  );
};
