import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const {
        user,
        googleSignIn,
        setName,
        setEmail,
        setPassword,
        createUserWithEmailPassword,
        error,
    } = useAuth();

    const userRegistrationHandeler = (e) => {
        e.preventDefault();
        createUserWithEmailPassword();
    };
    return (
        <div className="my-8 border-2 md:w-3/4 mx-auto p-5">
            <div className="flex flex-col justify-between items-center">
                <h2 className="text-3xl my-2 font-semibold">Register</h2>
                <form
                    onSubmit={userRegistrationHandeler}
                    action=""
                    className="flex flex-col justify-between items-center"
                >
                    <input
                        onBlur={(e) => setName(e.target.value)}
                        type="text"
                        required
                        className="py-2 px-8 border-2 rounded-md my-2"
                        placeholder="Your Name"
                    />
                    <input
                        onBlur={(e) => setEmail(e.target.value)}
                        type="email"
                        required
                        className="py-2 px-8 border-2 rounded-md my-2"
                        placeholder="Enter Your Email"
                    />
                    <input
                        onBlur={(e) => setPassword(e.target.value)}
                        type="password"
                        required
                        className="py-2 px-8 border-2 rounded-md my-2"
                        placeholder="Enter Your Password"
                    />
                    <input
                        className="border py-1 cursor-pointer px-6 text-xl bg-blue-700 text-white rounded-md my-2"
                        type="submit"
                        value="Register"
                    />
                    <div className="register-query">
                        <span>
                            Already have a account ?{' '}
                            <Link to="/login">Login Here</Link>
                        </span>
                    </div>
                </form>
                <p>----------Or-----------</p>
                <button
                    disabled={Boolean(user.email)}
                    onClick={googleSignIn}
                    className={`cursor-pointer flex flex-row justify-between items-center my-5 border-2 rounded-md py-2 px-5 ${
                        Boolean(user.email)
                            ? 'bg-gray-600 text-white cursor-not-allowed'
                            : ''
                    }`}
                >
                    <FcGoogle />{' '}
                    <span className="ml-2">Register With Google</span>
                </button>
            </div>

            <p className="text-center text-blue-600">{error}</p>
        </div>
    );
};

export default Register;
