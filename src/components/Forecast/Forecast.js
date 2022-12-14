import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';
import { v4 as uuidv4 } from 'uuid';

const Forecast = (props) => {
    const [responseObj, setResponseObj] = useState({});
    const [responseStatus, setResponseStatus] = useState({});
    const [city, setCity] = useState('');

    function emptyResponse() {
        setCity('');
        setResponseStatus({});
        setResponseObj({});
    }

    function getForecastAt(location) {
        if (!location) {
            emptyResponse();
            return;
        }

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bb6edee107mshed634e81ccd12bcp18b504jsncb87a481fee8',
                'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
            }
        };

        fetch(`https://aerisweather1.p.rapidapi.com/observations/${location}`, options)
            .then(response => {
                setResponseStatus(response.status);
                return response.json();
            })
            .then(data => setResponseObj(data))
            .catch(err => {
                emptyResponse();
                console.log(err.message);
            });

        // //mock values
        // setResponseStatus(200);
        // setResponseObj({
        //     response: {
        //         place: {
        //             name: "paris"
        //         },
        //         ob: {
        //             tempC: "10",
        //             weather: "cloudy"
        //         }
        //     }
        // })
    }

    function getForecastAtMyLocation(e) {
        e.preventDefault();
        fetch('http://ip-api.com/json')
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log("get forecast at ", `${json.city}, ${json.country}`);
                return getForecastAt(encodeURIComponent(`${json.city}, ${json.country}`));
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    function getUpdatedFavorites() {
        let favorites = props.userFavorites;
        favorites.push({
            id: uuidv4(),
            city
        })
        return JSON.stringify({favorites});
    }

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form>
                <input
                    type="text"
                    placeholder="Enter city, country"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className={classes.Button} onClick={(e) => {
                    e.preventDefault();
                    console.log("get forecast at ", city);
                    getForecastAt(encodeURIComponent(city));
                }}>Get Forecast</button>
                {props.isSignedIn && (
                    <button className={classes.Button} onClick={(e) => {
                        e.preventDefault();
                        fetch(`http://localhost:8000/users/${props.userId}`, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: getUpdatedFavorites()
                        }).then(res => res.json())
                            .then(res => alert("added to favorites successfully !"));
                    }}>Add searched city to favorites</button>
                )}
                <button className={classes.Button} onClick={getForecastAtMyLocation}>Get Forecast at my location</button>
            </form>
            {(responseStatus === 200) && responseObj && (
                <Conditions
                    responseObj={responseObj}
                />
            )}
        </div>
    )
}
export default Forecast;