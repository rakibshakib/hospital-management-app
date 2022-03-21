import React from 'react';

const AppoinmentCard = ({ item, handleDeleteAppoinment }) => {
    return (
        <div className="bg-white text-black my-2 rounded-md p-5">
            <h2>Patient Name: {item?.patientName}</h2>
            <h2>Appoinment Date: {item?.bookingDate}</h2>
            <h2>Doctor: {item?.doctorName}</h2>
            <h2>Depertment: {item?.depertmentName}</h2>
            <h2>Phone: {item?.phoneNumber}</h2>
            <button
                className="bg-red-600 text-white py-1 px-3 rounded-md my-2"
                onClick={() => handleDeleteAppoinment(item._id)}
            >
                Delete
            </button>
        </div>
    );
};

export default AppoinmentCard;
