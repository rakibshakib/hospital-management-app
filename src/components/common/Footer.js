import React from 'react';

const Footer = () => {
    return (
        <div className="footer mt-8 bg-slate-700">
            <div className="container mx-auto py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center text-gray-300 py-5">
                    <div className="leading-relaxed footer-text text-center md:text-left">
                        <h2 className="font-semibold text-gray-200 text-xl mb-5">
                            Important Links
                        </h2>
                        <p>Our Facebook Page</p>
                        <p>Ministry of Helth</p>
                        <p>Child Protection Help Line: 1098</p>
                    </div>
                    <div className="leading-relaxed footer-text text-center md:text-left">
                        <h2 className="font-semibold text-gray-200 text-xl mb-5">
                            Get In Touch
                        </h2>
                        <p className="mt-5">
                            Emai: contact.lifecare@lifecare.com
                        </p>
                        <p>Phone: +880 125634789</p>
                        <p>Address: Dhanmondi Dhaka, Bangladesh</p>
                    </div>
                    <div className="leading-relaxed footer-text text-center md:text-left px-4">
                        <h2 className="md:text-lg font-bold lg:text-2xl">
                            Life Care Hospital
                        </h2>
                        <p className="mt-5 text-base">
                            Life Care Hospital is one of the oldest and best
                            mental health treatment and rehab centers in Dhaka,
                            Bangladesh. Mental Care Hospital provided the very
                            best accommodation, healthy food, 24 hours doctor
                            facilities for patients.
                        </p>
                    </div>
                </div>
                <hr />
                <p className="text-center text-gray-200 my-2">
                    All Right Reserved &copy; Life Care Hospital - 2022{' '}
                </p>
            </div>
        </div>
    );
};

export default Footer;
