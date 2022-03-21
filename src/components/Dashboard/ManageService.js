import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const ManageService = () => {
    const [hospitalData, sethospitalData] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8000/all-services')
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
        const url = `http://localhost:8000/all-service/${id}`;
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
        <div>
            <h2 className="text-center font-semibold text-xl my-3">
                Life Care Hospital All Running Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-5 my-5 justify-items-center">
                {hospitalData.map((item) => (
                    <ServiceCart
                        item={item}
                        key={item._id}
                        handleDelteService={handleDelteService}
                    />
                ))}
            </div>
        </div>
    );
};

export default ManageService;