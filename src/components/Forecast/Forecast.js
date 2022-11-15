import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [responseStatus, setResponseStatus] = useState({});
    let [city, setCity] = useState('');
    const uriEncodedCity = encodeURIComponent(city);

    function getForecast(e) {
        e.preventDefault();
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bb6edee107mshed634e81ccd12bcp18b504jsncb87a481fee8',
                'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
            }
        };
        if (!city) {
            return;
        }
        fetch(`https://aerisweather1.p.rapidapi.com/observations/${uriEncodedCity}`, options)
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
            <form>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className={classes.Button} onClick={getForecast}>Get Forecast</button>
            </form>
            {responseStatus && responseObj && (
                <Conditions
                    responseObj={responseObj}
                    responseStatus={responseStatus}
                />
            )}
        </div>
    )
}
export default Forecast;