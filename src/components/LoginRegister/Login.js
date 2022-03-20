import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="my-8 border-2 md:w-3/4 mx-auto p-5">
            <div className="flex flex-col justify-between items-center">
                <h2 className="text-3xl my-2 font-semibold">Login</h2>
                <form
                    // onSubmit={emailPasswordloginHandeler}
                    action=""
                    className="flex flex-col justify-between items-center"
                >
                    <input
                        required
                        // onBlur={userEmailHandeler}
                        className="py-2 px-8 border-2 rounded-md my-2"
                        type="email"
                        placeholder="Enter Your Email"
                    />
                    <input
                        required
                        // onBlur={userPasswordHandeler}
                        className="py-2 px-8 border-2 rounded-md my-2"
                        type="password"
                        placeholder="Enter Your Password"
                    />
                    <input
                        className="border py-1 cursor-pointer px-6 text-xl bg-blue-700 text-white rounded-md my-2"
                        type="submit"
                        value="Login"
                    />
                    <div className="register-query">
                        <span>
                            Dont have a account ?{' '}
                            <Link className="text-blue-700" to="/register">
                                Register Here
                            </Link>
                        </span>
                    </div>
                </form>
                <p>----------Or-----------</p>
                <button
                    // onClick={handleGoogleLogin}
                    className="cursor-pointer flex flex-row justify-between items-center my-5 border-2 rounded-md py-2 px-5"
                >
                    {' '}
                    <FcGoogle /> <span className="ml-2">Login With Google</span>
                </button>
            </div>
            <p className="text-center text-blue-600">{}</p>
        </div>
    );
};

export default Login;
