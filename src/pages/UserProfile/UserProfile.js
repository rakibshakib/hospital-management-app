import axios from 'axios';
import React from 'react';
import AddReview from '../../components/AddReview/AddReview';
import useAuth from '../../Hooks/useAuth';

const UserProfile = () => {
    const { user, logOutUser } = useAuth();
    const [myOrder, setMyOrder] = React.useState([]);
    React.useEffect(() => {
        axios
            .post('http://localhost:8000/my-appoinment', { email: user?.email })
            .then((response) => {
                setMyOrder(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [user]);

    return (
        <div className="container mx-auto my-5">
            <div className="profile border-slate-600 border-2 p-5 rounded-md">
                <h2 className="text-2xl font-medium">
                    User Name: {user?.displayName}
                </h2>
                <p className="text-lg font-normal mt-5">Email: {user?.email}</p>
                <button
                    className="py-1 px-3 bg-slate-700 rounded-md text-white mt-5"
                    onClick={logOutUser}
                >
                    Logout
                </button>
            </div>
            <hr />
            <div className="myAppoinment my-5">
                <h2 className="text-center my-5 text-xl font-medium">
                    Your Appoinment List
                </h2>
                {myOrder.length === 0 ? (
                    <h2 className="text-center text-yellow-300 font-bold">
                        Loading...
                    </h2>
                ) : (
                    <div>
                        {myOrder.map((order) => (
                            <div
                                key={order._id}
                                className="bg-slate-600 text-white border rounded-md p-5 my-2"
                            >
                                <h2>Patient Name: {order?.patientName}</h2>
                                <h2>Appoinment Date: {order?.bookingDate}</h2>
                                <h2>Doctor: {order?.doctorName}</h2>
                                <h2>Depertment: {order?.depertmentName}</h2>
                                <h2>Phone: {order?.phoneNumber}</h2>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="container mx-auto">
                <AddReview />
            </div>
        </div>
    );
};

export default UserProfile;
