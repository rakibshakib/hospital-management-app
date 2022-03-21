import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {
        user,
        googleSignIn,
        setEmail,
        setPassword,
        loginWithEmailPassword,
        error,
        setUser,
        setError,
        saveUserData,
    } = useAuth();

    // console.log(Boolean(user.email));
    // console.log(user.email);
    // login with email and password handeler
    const emailPasswordloginHandeler = (e) => {
        e.preventDefault();
        loginWithEmailPassword()
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                saveUserData(user.email, user.displayName, 'PUT');
                setUser(user);
                // history.push(redirect_uri)
                setError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(`${errorCode} - ${errorMessage}`);
            });
    };
    return (
        <div className="my-8 border-2 md:w-3/4 mx-auto p-5">
            <div className="flex flex-col justify-between items-center">
                <h2 className="text-3xl my-2 font-semibold">Login</h2>
                <form
                    onSubmit={emailPasswordloginHandeler}
                    action=""
                    className="flex flex-col justify-between items-center"
                >
                    <input
                        required
                        onBlur={(e) => setEmail(e.target.value)}
                        className="py-2 px-8 border-2 rounded-md my-2"
                        type="email"
                        placeholder="Enter Your Email"
                    />
                    <input
                        required
                        onBlur={(e) => setPassword(e.target.value)}
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
                    disabled={Boolean(user.email)}
                    onClick={googleSignIn}
                    className={`cursor-pointer flex flex-row justify-between items-center my-5 border-2 rounded-md py-2 px-5 ${
                        Boolean(user.email)
                            ? 'bg-gray-600 text-white cursor-not-allowed'
                            : ''
                    }`}
                >
                    {' '}
                    <FcGoogle /> <span className="ml-2">Login With Google</span>
                </button>
            </div>
            <p className="text-center text-blue-600">{error}</p>
        </div>
    );
};

export default Login;
