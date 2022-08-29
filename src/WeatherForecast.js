import axios from "axios";
import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function handleResponse(repsonse) {
    console.log(repsonse.data);
  }

  let apiKey = `6ad09e88b3e793860ef68d84c8bf5d66`;
  let longtitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div>
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-date">Thu</div>
            <WeatherIcon code="01d" size={36} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">18°</span>
              <span className="WeatherForecast-temperature-min">12°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
