import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { slides } from '@/data';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: '.slider__angle-left',
          nextEl: '.slider__angle-right',
        }}
        pagination={{
          clickable: false,
          el: '.slider__pagination',
          renderBullet: (_, className) =>
            '<span class="' + className + '">' + '' + '</span>',
        }}
        speed={500}
        slidesPerView={1}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="slider__swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="slider__slide">
            <img
              src={slide.src}
              alt={slide.alt}
              loading="eager"
              className="slider__image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider__cover" />
      <div className="slider__pagination" />
      <FontAwesomeIcon
        icon={faAngleLeft}
        className="slider__angle slider__angle-left"
      />
      <FontAwesomeIcon
        icon={faAngleRight}
        className="slider__angle slider__angle-right"
      />
    </div>
  );
};
