import { useEffect, useState } from 'react';
const axios = require('axios');

const useHospitalData = () => {
    const [hospitalData, sethospitalData] = useState([]);
    useEffect(() => {
        axios
            .get('https://guarded-depths-47296.herokuapp.com/all-services')
            .then((res) => sethospitalData(res.data))
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    return hospitalData;
};

export default useHospitalData;
