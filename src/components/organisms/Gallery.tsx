import { Text, CardImage } from '@/components/atoms';

import { IGallery } from '@/models';

import Image from '@/assets/banners/about-us.jpg';

export const Gallery = ({ title = 'Galería' }: IGallery) => {
  return (
    <section className="gallery">
      <Text
        size="custom"
        color="white"
        family="quicksand"
        weight="bold"
        className="gallery__title"
      >
        {title}
      </Text>
      <div className="gallery__images">
        <CardImage src={Image} alt="image" />
        <CardImage src={Image} alt="image" />
        <CardImage src={Image} alt="image" />
        <CardImage src={Image} alt="image" />
        <CardImage src={Image} alt="image" />
        <CardImage src={Image} alt="image" />
        <CardImage src={Image} alt="image" />
        <CardImage src={Image} alt="image" />
        <CardImage src={Image} alt="image" />
        <CardImage src={Image} alt="image" />
        <CardImage src={Image} alt="image" />
      </div>
    </section>
  );
};
