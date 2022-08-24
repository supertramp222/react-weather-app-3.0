import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="prediction-container">
        <div className="overview">
          <p>
            <FormattedDate date={props.data.date} />
          </p>
          <h2>{props.data.city}</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-7">
          <div className="clearfix weather-temperature">
            <h1>{Math.round(props.data.temperature)}</h1>
            <h3>°C</h3>
          </div>
        </div>
        <div className="col-5 ">
          <div className="weather-details">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="row">
        <div className="col-12">
          <div className="weather-description">
            <div className="col-1">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="partly cloudy"
                className="float-left"
                width="80px"
              />
            </div>
            <div className="col-11">
              <h3 className="text-capitalize">{props.data.description}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="weather-forecast">
        <div className="row">
          <div className="col-2">
            <div className="weather-forecast-date">
              <text>
                <strong>Thu</strong>
              </text>
            </div>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt=""
              width="42"
            />
            <div className="weather-forecast-temperatures">
              <text>
                <strong>
                  <span className="weather-forecast-temperature-max">18°</span>
                </strong>
                <span className="weather-forecast-temperature-min">12°</span>
              </text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
