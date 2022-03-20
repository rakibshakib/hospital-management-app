import React from 'react';
import useHospitalData from '../../Hooks/useHospitalData';
import ServiceCard from './ServiceCard';

const ServiceComponent = () => {
    const hospitalData = useHospitalData();
    return (
        <div className="container mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-center my-8">
                Our Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-5 my-5 border justify-items-center">
                {hospitalData.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default ServiceComponent;
