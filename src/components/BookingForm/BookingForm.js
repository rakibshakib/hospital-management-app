import { Alert } from '@mui/material';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useHospitalData from '../../Hooks/useHospitalData';
const BookingForm = () => {
    const { user } = useAuth();
    const setDate = useRef();
    const depertment = useRef();
    const doctor = useRef();
    const patient = useRef();
    const phone = useRef();
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [patientName, setPatientName] = useState('');
    const [bookingDate, setBookingDate] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [depertmentName, setDepertmentName] = useState('');
    const hospitalData = useHospitalData();
    const handleAppoinment = (e) => {
        e.preventDefault();
        setOrderSuccess(false);
        let appoinmentInfo = {
            patientName,
            phoneNumber,
            bookingDate,
            doctorName,
            depertmentName,
            email: user?.email,
            key: Date.now(),
        };
        axios
            .post('http://localhost:8000/add-appoinments', appoinmentInfo)
            .then(function (response) {
                if (response?.data?.insertedId) {
                    setOrderSuccess(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <>
            <div className="container mx-auto text-white">
                <h2 className="text-xl md:text-2xl text-center mt-5">
                    BOOK APPOINTMENT
                </h2>
                <form
                    action=""
                    onSubmit={handleAppoinment}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-stretch gap-5 my-5  p-5"
                >
                    <div className="flex flex-col gap-y-5">
                        <label htmlFor="">Patient Name</label>
                        <input
                            className="border focus:outline-none py-1 px-3 text-black"
                            required
                            type="text"
                            name="patient-name"
                            placeholder="Patient Name"
                            ref={patient}
                            onChange={() =>
                                setPatientName(patient.current.value)
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <label htmlFor="">Phone Number</label>
                        <input
                            className="border focus:outline-none py-1 px-3 text-black"
                            required
                            type="number"
                            name="phone"
                            placeholder="Phone Number"
                            ref={phone}
                            onChange={() => setPhoneNumber(phone.current.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <label htmlFor="">Choose Date</label>
                        <input
                            className="border focus:outline-none py-1 px-3 text-black"
                            required
                            type="date"
                            ref={setDate}
                            onChange={() =>
                                setBookingDate(setDate.current.value)
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <label htmlFor="">Depertment</label>
                        <select
                            className="border focus:outline-none py-1 px-3 text-black"
                            required
                            type="text"
                            ref={depertment}
                            onChange={() =>
                                setDepertmentName(depertment.current?.value)
                            }
                        >
                            {' '}
                            {hospitalData.map((item) => (
                                <option key={item._id} value={item?.name}>
                                    {' '}
                                    {item?.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <label htmlFor="">Doctor</label>
                        <select
                            className="border focus:outline-none py-1 px-3 text-black"
                            required
                            ref={doctor}
                            onChange={() =>
                                setDoctorName(doctor.current?.value)
                            }
                            type="text"
                        >
                            <option value="Dr.Veranda Tanumihardja">
                                Dr.Veranda Tanumihardja
                            </option>
                            <option value="Dr. Kathryn Wood">
                                Dr. Kathryn Wood
                            </option>
                            <option value="Dr. John Allen">
                                Dr. John Allen
                            </option>
                            <option value="Dr. Peter Parker">
                                Dr. Peter Parker
                            </option>
                        </select>
                    </div>
                    <button
                        className="border py-3 px-5 bg-slate-700 text-white rounded-md mt-8"
                        type="submit"
                    >
                        Confirm Appoinment
                    </button>
                </form>

                {orderSuccess && (
                    <Alert sx={{ my: 5, width: '80%' }} severity="success">
                        Apoinment Booking Success ! We will contach ASAP
                    </Alert>
                )}
            </div>
        </>
    );
};

export default BookingForm;
