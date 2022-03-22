import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const ManageService = () => {
    const [hospitalData, sethospitalData] = useState([]);

    useEffect(() => {
        axios
            .get('https://guarded-depths-47296.herokuapp.com/all-services')
            .then((res) => sethospitalData(res.data))
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    const handleDelteService = (id) => {
        const proceed = window.confirm(
            'Are You Sure Want to Delete Your Order ?'
        );
        const url = `https://guarded-depths-47296.herokuapp.com/all-service/${id}`;
        if (proceed) {
            axios
                .delete(url)
                .then((res) => {
                    if (res?.data?.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingProducts = hospitalData.filter(
                            (item) => item._id !== id
                        );
                        sethospitalData(remainingProducts);
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
    };

    return (
        <div className="h-screen">
            <h2 className="text-center font-semibold text-xl my-3">
                Life Care Hospital All Running Services
            </h2>
            <div className="flex flex-col ">
                {hospitalData.length === 0 ? (
                    <div>
                        <h2 className="text-center font-xl ">Loading.......</h2>
                    </div>
                ) : (
                    hospitalData.map((item) => (
                        <ServiceCart
                            item={item}
                            key={item._id}
                            handleDelteService={handleDelteService}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default ManageService;
