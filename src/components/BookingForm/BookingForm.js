import TextField from '@mui/material/TextField';
import React from 'react';
const BookingForm = () => {
    const handleAppoinment = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <h2>BOOK APPOINTMENT</h2>
            <form action="" onSubmit={handleAppoinment}>
                <TextField
                    id="outlined-basic"
                    label="Patient Name"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    type="text"
                />
                <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    type="number"
                />
                <TextField
                    id="outlined-basic"
                    label="Choose Date"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />
                <TextField
                    select
                    id="outlined-basic"
                    label="Choose Doctor"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    SelectProps={{
                        native: true,
                    }}
                    onChange={(e) => console.log(e.target.value)}
                >
                    <option value="Dr.Veranda Tanumihardja">
                        Dr.Veranda Tanumihardja
                    </option>
                    <option value="Dr. Kathryn Wood">Dr. Kathryn Wood</option>
                    <option value="Dr. John Allen">Dr. John Allen</option>
                    <option value="Dr. Peter Parker">Dr. Peter Parker</option>
                </TextField>
            </form>
        </div>
    );
};

export default BookingForm;
