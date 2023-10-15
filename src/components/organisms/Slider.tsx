import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ISlider } from '@/models';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Slider = ({ slides }: ISlider) => {
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Pagination]}
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
        speed={600}
        slidesPerView={1}
        loop={true}
        className="slider__swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="slider__slide">
            <img src={slide.src} alt={slide.alt} className="slider__image" />
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
