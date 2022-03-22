import React from 'react';

const Paginate = ({ productPerPage, totalProduct, paginateHandeler }) => {
    const pageNumber = [];
    for (let i = 1; i < Math.ceil(totalProduct / productPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <div className="paginate-container flex justify-center items-center">
            <div className="flex justify-around">
                {pageNumber.map((number) => (
                    <button
                        className="paginate-btn py-1 px-5 font-bold bg-slate-500 rounded-md text-white ml-5"
                        onClick={() => paginateHandeler(number)}
                        key={number}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Paginate;
