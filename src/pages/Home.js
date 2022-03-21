import React from 'react';
import BannerSlider from '../components/BannerSlider';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import ServiceComponent from '../components/Service/ServiceComponent';

const Home = () => {
    return (
        <div>
            <Header />
            <BannerSlider />
            <ServiceComponent />
            <Footer />
        </div>
    );
};

export default Home;
