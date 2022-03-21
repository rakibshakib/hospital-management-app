import React from 'react';
import { BsFacebook, BsPinterest, BsTwitter } from 'react-icons/bs';
import AddReview from '../components/AddReview/AddReview';
const Contact = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 md:px-5 my-5 ">
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold ">
                        Get in touch
                    </h2>
                    <p className="text-lg font-normal my-5">
                        This is Herman Brooks. Herman is just like the rest of
                        us. Everyday he has to make all kinds of decisions like
                        what to wear, whom to date and when to panic.
                    </p>

                    <p className="text-lg font-normal my-5">
                        Now these decisions should be easy but if you take a
                        look inside Herman’s head, you'll see why he sometimes
                        has trouble making up his mind. Sometimes they agree…
                        usually they don’t. But the struggle is going on inside
                        all of us and it’s all going on inside Herman’s head.
                    </p>

                    <div>
                        <h2 className="text-xl font-semibold mb-5 ">
                            CONTACT INFO
                        </h2>
                        <p>email: info@hospitalplus.com</p>
                        <p>phone: +3212345678</p>
                    </div>
                    <div className="flex items-center md:justify-items-start my-3">
                        <BsFacebook className="text-xl text-slate-700 hover:text-slate-400" />
                        <BsTwitter className="text-xl text-slate-700 ml-3 hover:text-slate-400" />
                        <BsPinterest className="text-xl text-slate-700 ml-3 hover:text-slate-400" />
                    </div>
                </div>
                <div>
                    <AddReview />
                </div>
            </div>
        </div>
    );
};

export default Contact;
