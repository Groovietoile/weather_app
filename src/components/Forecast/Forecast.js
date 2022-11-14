import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [responseStatus, setResponseStatus] = useState({});
    async function getForecast() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bb6edee107mshed634e81ccd12bcp18b504jsncb87a481fee8',
                'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
            }
        };
        const response = await fetch('https://aerisweather1.p.rapidapi.com/observations/paris,fr', options);
        setResponseStatus(response.status);
        const responseJson = await response.json();
        setResponseObj(responseJson);
    }
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <button onClick={getForecast}>Get Forecast</button>
            <Conditions
                responseObj={responseObj}
                responseStatus={responseStatus}
            />
        </div>
    )
}
export default Forecast;