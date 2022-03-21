import React from 'react';
import BookingForm from '../components/BookingForm/BookingForm';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Doctor from '../components/Doctors/Doctor';
import Review from '../components/Review/Review';

const DepertmentPage = () => {
    return (
        <div>
            <Header />
            <Doctor />
            <div className="bg-gray-700 py-5">
                <BookingForm />
            </div>
            <Review />
            <Footer />
        </div>
    );
};

export default DepertmentPage;
