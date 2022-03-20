import React from 'react';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../asset/images/banner-img.jpg';
import img2 from '../asset/images/banner-img2.jpg';

SwiperCore.use([Pagination, Autoplay]);
const BannerSlider = () => {
    return (
        <div className="banner w-screen	mb-10">
            <Swiper
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                slidesPerGroup={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 6,
                    },
                    426: {
                        slidesPerView: 1,
                        spaceBetween: 6,
                    },

                    769: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <figure className="w-full">
                        <img className="w-full" src={img1} alt="" />
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="w-full">
                        <img className="w-full " src={img2} alt="" />
                    </figure>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;
