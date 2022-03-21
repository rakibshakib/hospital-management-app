import React from 'react';
import { doctorList } from '../../data/doctorsList';

const Doctor = () => {
    return (
        <div className="container mx-auto my-8">
            <h2 className="text-center text-2xl md:font-5xl font-bold text-slate-700">
                OUR DOCTORS
            </h2>
            <p className="text-center text-lg font-normal my-3">
                Our doctors are specialized in their field and have more than 10
                years of experiences.
            </p>
            <div className="flex flex-col md:flex-row justify-between flex-wrap my-5">
                {doctorList.map((item) => (
                    <div className="w-62" key={item.id}>
                        <div>
                            <figure className="w-56">
                                <img
                                    className="w-full rounded-md"
                                    src={item?.img}
                                    alt=""
                                />
                            </figure>
                            <div className="text-center">
                                <h2 className="text-lg my-2 font-semibold">
                                    {item.name}
                                </h2>
                                <p className="text-gray-400">{item.job}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
};

export default Doctor;
