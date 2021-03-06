import React from 'react';
import UpdateService from './UpdateService';

const ServiceCart = ({ item, handleDelteService }) => {
    return (
        <div className="border rounded-md p-3 bg-white text-black flex justify-between my-3">
            <div className="card">
                <h2>
                    Service Name:{' '}
                    <span className="text-md font-medium">{item?.name}</span>
                </h2>
                <h2 className="my-3">
                    <span className="text-md font-medium">Description:</span>{' '}
                    {item?.description.slice(0, 50)}... .. ..read more
                </h2>
                <h2 className="text-md font-medium">
                    Available_day: {item?.available_day}
                </h2>
            </div>
            <div className="mt-5">
                <button
                    className="py-1 px-3 text-sm font-medium bg-red-700 text-white rounded-md"
                    onClick={() => handleDelteService(item._id)}
                >
                    Delte
                </button>
                <button className="py-1 px-3 text-sm font-medium bg-yellow-500 text-black rounded-md md:ml-5">
                    Update
                </button>
                <UpdateService item={item} />
            </div>
        </div>
    );
};

export default ServiceCart;
