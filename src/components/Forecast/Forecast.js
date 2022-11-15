import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [responseStatus, setResponseStatus] = useState({});
    function getForecast() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bb6edee107mshed634e81ccd12bcp18b504jsncb87a481fee8',
                'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
            }
        };
        fetch('https://aerisweather1.p.rapidapi.com/observations/paris,fr', options)
            .then(response => {
                setResponseStatus(response.status);
                return response.json();
            })
            .then(data => setResponseObj(data))
            .catch(err => {
                console.log(err.message);
            });
    }
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <button onClick={getForecast}>Get Forecast</button>
            {
                responseStatus && responseObj && (
                    <Conditions
                        responseObj={responseObj}
                        responseStatus={responseStatus}
                    />                   
                )
            }
        </div>
    )
}
export default Forecast;