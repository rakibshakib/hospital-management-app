import React, { useState } from 'react';
import useHospitalData from '../../Hooks/useHospitalData';
import Paginate from '../../Paginate/Paginate';
import ServiceCard from './ServiceCard';

const ServiceComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const hospitalData = useHospitalData();
    const productPerPage = 5;
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const getCurrentProducts = hospitalData.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );
    const paginateHandeler = (num) => {
        setCurrentPage(num);
    };
    return (
        <div className="container mx-auto py-5">
            <h2 className="text-xl md:text-4xl text-slate-600 font-bold text-center my-8">
                Our Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-5 my-5 justify-items-center">
                {getCurrentProducts.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
            <Paginate
                productPerPage={productPerPage}
                totalProduct={hospitalData.length + 1}
                paginateHandeler={paginateHandeler}
            />
            <hr className="my-5" />
        </div>
    );
};

export default ServiceComponent;
