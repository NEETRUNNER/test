import '../../styles/slider.sass'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

import firstSlide from '../../images/first_slide.png';
import secondSlide from '../../images/two_slide.png';
import thirdSlide from '../../images/third_slide.png';
import fourSlide from '../../images/four_slide.png';
import fiveSlide from '../../images/five_slide.png';
import sixSlide from '../../images/six_slide.png'

const Slider = () => {
    return (
        <section id='photo' className="slider">
            <h1 className="slider__title">Фото из наших клубов</h1>
            
            <div className="slider__wrapper">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 20
                    },
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    // when window width is >= 480px
                    991: {
                      slidesPerView: 1,
                      spaceBetween: 30
                    },
                    // when window width is >= 640px
                    1199: {
                      slidesPerView: 1,
                      spaceBetween: 40
                    },
                    1439: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.custom-next', // Указываем элемент для "next"
                    prevEl: '.custom-prev', // Указываем элемент для "prev"
                }}
                effect="coverflow"  // Включаем эффект Coverflow
                coverflowEffect={{
                    rotate: 0, // Поворот слайда
                    stretch: 100, // Растяжение между слайдами
                    depth: 100, // Глубина, создающая перспективу
                    modifier: 1,
                    slideShadows: false // Включаем тени для слайдов
                }}
                className='swiper__slider'
            >
                <SwiperSlide>
                    <img src={firstSlide} alt="" className="slider__img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={secondSlide} alt="" className="slider__img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={thirdSlide} alt="" className="slider__img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fourSlide} alt="" className="slider__img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fiveSlide} alt="" className="slider__img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sixSlide} alt="" className="slider__img" />
                </SwiperSlide>
            </Swiper>
            </div>
        </section>
    );
}

export default Slider;
