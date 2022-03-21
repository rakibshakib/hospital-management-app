import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const DashboardHeader = () => {
    const { logOutUser } = useAuth();
    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className="flex justify-items-start items-center">
                <NavLink
                    to="/dashboard/manageAppoinments"
                    className="hover:bg-slate-300 hover:text-black py-2 px-5 font-semibold cursor-pointer"
                >
                    Manage Appoinment
                </NavLink>
                <NavLink
                    to="/dashboard/manageServices"
                    className="hover:bg-slate-300 hover:text-black py-2 px-5 font-semibold cursor-pointer"
                >
                    Manage Services
                </NavLink>
                <NavLink
                    to="/dashboard/manageFeedback"
                    className="hover:bg-slate-300 hover:text-black py-2 px-5 font-semibold cursor-pointer"
                >
                    User Review
                </NavLink>
            </div>
            <div className="flex justify-items-start items-center">
                <NavLink
                    to="/"
                    className="hover:bg-slate-300 hover:text-black py-2 px-5 font-semibold cursor-pointer"
                >
                    Visit Website
                </NavLink>
                <li
                    onClick={logOutUser}
                    className="hover:bg-slate-200 bg-yellow-100 text-black hover:text-black py-2 px-5 font-semibold cursor-pointer"
                >
                    Logout
                </li>
            </div>
        </div>
    );
};

export default DashboardHeader;
