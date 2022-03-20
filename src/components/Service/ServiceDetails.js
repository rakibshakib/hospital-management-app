import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import useHospitalData from '../../Hooks/useHospitalData';

const ServiceDetails = () => {
    const paramsId = useParams();
    const [targetService, setTargetService] = useState({});
    useEffect(() => {
        axios
            .get(`http://localhost:8000/all-service/${paramsId.id}`)
            .then((res) => setTargetService(res.data))
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [paramsId]);
    console.log(targetService);

    return (
        <div className="container mx-auto">
            <div>
                {targetService.length === 0 ? (
                    <div>
                        <h2>Loading......</h2>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-5">
                        <div className="rounded-xl m-2 w-80">
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
        </div>
    );
};

export default ServiceDetails;
