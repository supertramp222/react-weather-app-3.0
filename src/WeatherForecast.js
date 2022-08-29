import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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
