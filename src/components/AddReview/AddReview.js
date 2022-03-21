import { Alert, Button, Rating, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const AddReview = () => {
    const [ratingValue, setRatingValue] = useState(0);
    const { user } = useAuth();

    const [userReview, setUserReview] = useState({});
    const [reviewSuccess, setReviewSuccess] = useState(false);

    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...userReview };
        newReview[field] = value;
        setUserReview(newReview);
    };
    const addReviews = (e) => {
        e.preventDefault();
        const review = {
            ...userReview,
            reviewRating: ratingValue,
            status: 'pending',
            UserEmail: user?.email || '',
        };
        console.log('this is the review: ', review);

        axios
            .post('http://localhost:8000/feedback', review)
            .then(function (response) {
                if (response?.data?.insertedId) {
                    setReviewSuccess(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="mt-5">
            <h2 className="text-center text-2xl font-medium">
                Please Give Us A Review
            </h2>
            <Box sx={{ my: 5 }}>
                <form
                    onSubmit={addReviews}
                    className="flex flex-col my-5 justify-items-center items-center gap-4"
                >
                    <TextField
                        name="name"
                        onBlur={handleBlur}
                        sx={{ width: '75%' }}
                        label="Your Name"
                        variant="standard"
                    />
                    <TextField
                        name="email"
                        onBlur={handleBlur}
                        sx={{ width: '75%' }}
                        label="Your Email"
                        variant="standard"
                    />
                    <TextField
                        name="review"
                        onBlur={handleBlur}
                        sx={{ width: '75%' }}
                        label="Your Review"
                    />
                    <Rating
                        name="simple-controlled"
                        value={ratingValue}
                        sx={{ fontSize: 30 }}
                        onChange={(event, newValue) => {
                            setRatingValue(newValue);
                        }}
                    />
                    <Button variant="contained" type="submit">
                        Submit Review
                    </Button>
                </form>

                {reviewSuccess && (
                    <Alert
                        sx={{ my: 2, mx: 3, textAlign: 'center' }}
                        severity="success"
                    >
                        Thanks For Your Feedback 😊
                    </Alert>
                )}
            </Box>
        </div>
    );
};

export default AddReview;
