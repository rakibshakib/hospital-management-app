import React from 'react';
import { FaRegSadCry } from 'react-icons/fa';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
const NotFound = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto">
                <div className="flex items-center justify-center flex-col my-8">
                    <FaRegSadCry className="text-center text-5xl md:text-8xl text-gray-500" />
                    <h2 className=" font-semibold mt-5 text-2xl md:text-5xl">
                        404
                    </h2>
                    <p className=" font-semibold mt-2 text-lg md:text-2xl">
                        Page Not Found
                    </p>
                    <p className="text-red-600 font-semibold mt-5 text-center text-base md:text-base">
                        The requested URL /error was not found on this server.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;
