import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const navigate = useNavigate();
    const { image, name, _id } = service;
    const handleRoute = () => {
        navigate(`/details-service/${_id}`);
    };
    return (
        <div
            className="bg-gray-100  hover:shadow-lg  rounded-md card-width my-5 w-72 cursor-pointer"
            onClick={handleRoute}
        >
            <div className="flex flex-col items-center text-center text-black py-1">
                <div className="w-60 card-img rounded-xl m-2">
                    <img
                        className="w-full transition transform duration-700 hover:scale-110"
                        src={image}
                        alt=""
                    />
                </div>
                <h2 className="text-xl font-semibold my-3 ">{name}</h2>
                <button className="bg-slate-700 text-sm border-0 text-white my-2 px-3 py-1 focus:outline-none  rounded-lg transform transition duration-300 hover:scale-105">
                    See Details
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
