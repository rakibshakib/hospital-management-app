import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AppoinmentCard from './AppoinmentCard';

const ManageAppoinment = () => {
    const [allAppoinmnets, setAllapoinments] = useState([]);
    useEffect(() => {
        axios
            .get('https://guarded-depths-47296.herokuapp.com/all-appoinments ')
            .then((res) => setAllapoinments(res.data))
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    const handleDeleteAppoinment = (id) => {
        const proceed = window.confirm(
            'Are You Sure Want to Delete Your Order ?'
        );
        const url = `https://guarded-depths-47296.herokuapp.com/all-appoinments/${id}`;
        if (proceed) {
            axios
                .delete(url)
                .then((res) => {
                    if (res?.data?.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingProducts = allAppoinmnets.filter(
                            (item) => item._id !== id
                        );
                        setAllapoinments(remainingProducts);
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
    };
    console.log(allAppoinmnets);
    return (
        <div>
            <h2 className="text-xl font-medium">All Appoinments: </h2>
            <div>
                {allAppoinmnets.map((item) => (
                    <AppoinmentCard
                        key={item._id}
                        item={item}
                        handleDeleteAppoinment={handleDeleteAppoinment}
                    />
                ))}
            </div>
        </div>
    );
};

export default ManageAppoinment;
