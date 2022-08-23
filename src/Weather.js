import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="card">
        <div className="card-body">
          <form className="d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city"
              aria-label="Search"
              autoFocus="on"
            />
            <button className="btn-search" type="submit">
              Search
            </button>
          </form>

          <div className="prediction-container">
            <div className="overview">
              <p>Sunday, Nov. 5th</p>
              <h2>New York</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-7">
              <div className="clearfix weather-temperature">
                <h1>30</h1>
                <h3>°C</h3>
              </div>
            </div>
            <div className="col-5 ">
              <div className="weather-details">
                <ul>
                  <li>Humidity: 5%</li>
                  <li>Wind: 5 km/h</li>
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
                  <h3>clear with Clouds</h3>
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
                      <span className="weather-forecast-temperature-max">
                        18°
                      </span>
                    </strong>
                    <span className="weather-forecast-temperature-min">
                      12°
                    </span>
                  </text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
