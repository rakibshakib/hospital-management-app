import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCart from './ReviewCart';

SwiperCore.use([Autoplay]);
const Review = () => {
    const [productReview, setProductReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/all-feedback')
            .then((res) => res.json())
            .then((data) => {
                const approvedFeedback = data.filter(
                    (item) => item.status === 'approved'
                );
                setProductReview(approvedFeedback);
            });
    }, []);
    return (
        <div className="container mx-auto my-6">
            <h2 className="text-2xl text-center font-semibold my-6">
                Customer Review
            </h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 6,
                    },
                    426: {
                        slidesPerView: 2,
                        spaceBetween: 6,
                    },

                    769: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
                className="mySwiper"
            >
                {productReview.map((item) => (
                    <SwiperSlide key={item?._id}>
                        <ReviewCart key={item?._id} item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Review;
