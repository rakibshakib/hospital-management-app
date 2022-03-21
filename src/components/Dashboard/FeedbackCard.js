import axios from 'axios';
import React, { useState } from 'react';

const FeedbackCard = ({ item }) => {
    const [status, setStatus] = useState(item?.status);
    const [isApproved, setIsApproved] = useState(false);

    const approveFeedback = (id) => {
        axios
            .patch('http://localhost:8000/update-feedback', { _id: id })
            .then((res) => {
                setStatus('approved');
                setIsApproved(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="border my-3 p-5 rounded-md">
            <h2>
                Message: <span className="text-xl">{item?.review}</span>
            </h2>
            <h2>Email: {item?.email} </h2>
            <p>Status: {status} </p>
            <button
                disabled={isApproved}
                onClick={() => approveFeedback(item?._id)}
                className={` py-1 px-3 rounded-xl text-slate-800 font-bold ring-2 ring-white my-2 cursor-pointer ${
                    isApproved ? 'bg-gray-500' : 'bg-green-500'
                }  `}
            >
                {isApproved ? <p>Approved</p> : <p>Approve ?</p>}
            </button>
        </div>
    );
};

export default FeedbackCard;
