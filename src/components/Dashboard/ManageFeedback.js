import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FeedbackCard from './FeedbackCard';

const ManageFeedback = () => {
    const [allFeedback, setAllFeedback] = useState([]);

    useEffect(() => {
        axios
            .get('https://guarded-depths-47296.herokuapp.com/all-feedback')
            .then((res) => setAllFeedback(res.data))
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    console.log(allFeedback);

    return (
        <div className="h-screen">
            <h2 className="text-center font-medium text-xl">
                Manage All Feed back
            </h2>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
                {allFeedback.length === 0 ? (
                    <div>
                        <h2 className="text-center font-xl ">Loading.......</h2>
                    </div>
                ) : (
                    allFeedback.map((item) => (
                        <FeedbackCard key={item._id} item={item} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ManageFeedback;
