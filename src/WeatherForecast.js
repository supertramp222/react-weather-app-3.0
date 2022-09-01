import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(repsonse) {
    console.log(repsonse.data);
    setForecast(repsonse.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <div className="WeatherForecast">
          <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index > 0 && index < 7) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `6ad09e88b3e793860ef68d84c8bf5d66`;
    let longtitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
