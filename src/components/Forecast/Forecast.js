import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [responseStatus, setResponseStatus] = useState({});
    let [city, setCity] = useState('');
    // const uriEncodedCity = encodeURIComponent(city);

    function getForecastAt(location) {
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': 'bb6edee107mshed634e81ccd12bcp18b504jsncb87a481fee8',
        //         'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
        //     }
        // };
        // if (!city) {
        //     return;
        // }
        // fetch(`https://aerisweather1.p.rapidapi.com/observations/${location}`, options)
        //     .then(response => {
        //         setResponseStatus(response.status);
        //         return response.json();
        //     })
        //     .then(data => setResponseObj(data))
        //     .catch(err => {
        //         console.log(err.message);
        //     });


        //mock values
        setResponseStatus(200);
        setResponseObj({
            response: {
                place: {
                    name: "paris"
                },
                ob: {
                    tempC: "10",
                    weather: "cloudy"
                }
            }
        })
    }

    // function getForecast(e) {
    //     e.preventDefault();
    //     getForecastAt(uriEncodedCity);
    // }

    function getForecastAtMyLocation(e) {
        e.preventDefault();
        console.log("forecast");
        fetch('http://ip-api.com/json')
            .then(res => res.json())
            .then(response => {
                getForecastAt(encodeURIComponent(`${response.city}, ${response.country}`));
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    return (
        <>
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
                    <button className={classes.Button} onClick={(e) => {
                        e.preventDefault();
                        getForecastAt(encodeURIComponent(city));
                    }}>Get Forecast</button>
                    <button className={classes.Button} onClick={getForecastAtMyLocation}>Get Forecast at my location</button>
                </form>
                {responseStatus && responseObj && (
                    <Conditions
                        responseObj={responseObj}
                        responseStatus={responseStatus}
                    />
                )}
            </div>
            {/* <div>
                <h2>Find Current Weather Conditions at my location</h2>
                <form onSubmit={getForecastAtMyLocation}>
                    <button className={classes.Button} onClick={getForecastAtMyLocation}>Get Forecast</button>
                </form>
            </div> */}
        </>
    )
}
export default Forecast;