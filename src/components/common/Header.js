import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOutUser } = useAuth();
    // button toogle hooks
    const [toggle, setToogle] = React.useState(false);
    // toogle button handeler
    const handleToggle = () => {
        setToogle((toggle) => !toggle);
    };
    return (
        <nav>
            <div className="flex flex-col md:flex-row justify-between items-center container mx-auto py-4">
                <h2 className="md:text-lg font-bold lg:text-2xl text-slate-700">
                    Life Care Hospital
                </h2>
                <div className="flex justify-between items-center text-xl font-medium">
                    <p className="ml-3 text-base md:text-sm  lg:text-xl">
                        +88 01234567896
                    </p>
                </div>
                <div className="flex justify-between items-center text-xl font-medium">
                    <p className="ml-3 text-base md:text-sm lg:text-xl">
                        contact.lifecare@lifecare.com
                    </p>
                </div>
            </div>
            <div className="bg-slate-700	 mt-2">
                <div className="text-white text-md py-3 container mx-auto font-medium flex items-center justify-between desktop-nav">
                    <div>
                        <NavLink
                            className="nav-items py-3 px-2 transition delay-75 duration-300 ease-in-out"
                            to="/"
                        >
                            <span>Home</span>
                        </NavLink>
                        <NavLink
                            className=" nav-items py-3 px-2 ml-5 transition delay-75 duration-300 ease-in-out"
                            to="/booking"
                        >
                            <span>Depertment</span>
                        </NavLink>
                        <NavLink
                            className="nav-items py-3 px-2 ml-5 transition delay-75 duration-300 ease-in-out"
                            to="/about"
                        >
                            <span>Testing Opportunities</span>
                        </NavLink>
                        <NavLink
                            className="nav-items py-3 px-2 ml-5 transition delay-75 duration-300 ease-in-out "
                            to="/contact"
                        >
                            <span>Contact</span>
                        </NavLink>
                    </div>
                    <div>
                        {user?.email && (
                            <p className="inline-block mr-5 font-medium border-b-2 px-2 ">
                                {user.displayName}
                            </p>
                        )}
                        {user.email ? (
                            <button
                                onClick={logOutUser}
                                className="nav-items rounded-md px-2 ml-5 transition delay-75 duration-300 ease-in-ou"
                            >
                                {/* <BiLogOutCircle className="inline-block" />{' '} */}
                                Logout
                            </button>
                        ) : (
                            <NavLink
                                className="nav-items py-3 px-2 ml-5 transition delay-75 duration-300 ease-in-ou"
                                to="/login"
                            >
                                {/* <AiOutlineLogin className="inline-block" />{' '} */}
                                Login
                            </NavLink>
                        )}
                    </div>
                </div>
                {/* nav bar option for mobile */}
                <div className="mobile-nav">
                    <button
                        onClick={handleToggle}
                        className="text-2xl toggle text-white mx-12 py-5"
                    >
                        {/* <FaBars /> */}
                    </button>
                    <div
                        className={`flex flex-col justify-center items-center text-white font-medium responsive-nav  ${
                            toggle ? 'show-navs' : 'hide-navs'
                        }`}
                    >
                        <NavLink
                            className="nav-items py-2 px-2 transition delay-75 duration-300 ease-in-out"
                            to="/"
                        >
                            <span>Home</span>
                        </NavLink>
                        <NavLink
                            className=" nav-items py-2 px-2 transition delay-75 duration-300 ease-in-out"
                            to="/booking"
                        >
                            <span>Apointment</span>
                        </NavLink>
                        <NavLink
                            className="nav-items py-2 px-2 transition delay-75 duration-300 ease-in-out"
                            to="/about"
                        >
                            <span>About</span>
                        </NavLink>
                        <NavLink
                            className="nav-items py-2 px-2 transition delay-75 duration-300 ease-in-out "
                            to="/contact"
                        >
                            <span>Contact</span>
                        </NavLink>
                        {user?.email && (
                            <p className="my-2 font-medium border-b-2 px-2 text-center">
                                {user.displayName}
                            </p>
                        )}
                        {user.email ? (
                            <button
                                onClick={logOutUser}
                                className="nav-items rounded-md px-2 mb-3 transition delay-75 duration-300 ease-in-ou"
                            >
                                {/* <BiLogOutCircle className="inline-block" />{' '} */}
                                Logout
                            </button>
                        ) : (
                            <NavLink
                                className="nav-items py-2 px-2  mb-5 transition delay-75 duration-300 ease-in-ou"
                                to="/login"
                            >
                                {/* <AiOutlineLogin className="inline-block" />{' '} */}
                                Login
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
