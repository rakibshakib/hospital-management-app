import React from 'react';
import BannerSlider from '../components/BannerSlider';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Doctor from '../components/Doctors/Doctor';
import Review from '../components/Review/Review';
import ServiceComponent from '../components/Service/ServiceComponent';
import Testimonial from '../components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <BannerSlider />
            <Testimonial />
            <ServiceComponent />
            <Doctor />
            <Review />
            <Footer />
        </div>
    );
};

export default Home;
