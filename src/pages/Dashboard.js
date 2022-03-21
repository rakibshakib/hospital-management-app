import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
// import ManageAppoinment from '../components/Dashboard/ManageAppoinment';
// import ManageService from '../components/Dashboard/ManageService';

const Dashboard = () => {
    return (
        <div className="bg-slate-700 h-full text-white">
            <div className="">
                <div className="dash-board-container">
                    <div className="container mx-auto">
                        <DashboardHeader />
                    </div>
                    <hr />
                    <div className="container mx-auto my-5">
                        {/* <ManageAppoinment />
                        <ManageService /> */}
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
