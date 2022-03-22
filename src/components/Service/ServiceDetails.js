import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../BookingForm/BookingForm';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Doctor from '../Doctors/Doctor';
// import useHospitalData from '../../Hooks/useHospitalData';

const ServiceDetails = () => {
    const paramsId = useParams();
    const [targetService, setTargetService] = useState({});
    useEffect(() => {
        axios
            .get(
                `https://guarded-depths-47296.herokuapp.com/all-service/${paramsId.id}`
            )
            .then((res) => setTargetService(res.data))
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [paramsId]);

    return (
        <>
            <Header />
            <div className="my-5">
                <div className="container mx-auto">
                    {targetService.length === 0 ? (
                        <div className="flex justify-center items-center my-5">
                            <div>
                                <CircularProgress />
                                <h2>Loading........</h2>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start gap-y-5">
                            <div className="rounded-xl m-2 mx-auto w-8/12">
                                <img
                                    className="w-full"
                                    src={targetService?.image}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold my-3 ">
                                    {targetService?.name}
                                </h2>
                                <p className="text-md font-medium my-5">
                                    Description:{' '}
                                    <span className="font-normal">
                                        {targetService?.description}
                                    </span>
                                </p>
                                <p className="text-md font-medium my-4">
                                    Effectiveness:{' '}
                                    <span className="font-normal">
                                        {targetService?.effectiveness}
                                    </span>
                                </p>
                                <p className="text-md font-medium my-2">
                                    Available Day:{' '}
                                    <span className="font-normal">
                                        {targetService?.available_day}
                                    </span>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="my-12 py-3 bg-slate-700">
                    <BookingForm />
                </div>
            </div>
            <Doctor />
            <Footer />
        </>
    );
};

export default ServiceDetails;
