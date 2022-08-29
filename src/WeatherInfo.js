import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherTemperature celsius={props.data.temperature} />
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
              <div className="float-left">
                <WeatherIcon code={props.data.icon} size={90} />
              </div>
            </div>
            <div className="col-11">
              <h3 className="text-capitalize">{props.data.description}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
