import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [backGroundBlue, setBackGroundBlue] = useState("");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
  }

  useEffect(() => {
    function backGround() {
      if (weatherData.temperature < 20) {
        setBackGroundBlue(true);
      } else {
        setBackGroundBlue(false);
      }
    }
    backGround();
  }, [weatherData.temperature]);

  function search() {
    const apiKey = "6ad09e88b3e793860ef68d84c8bf5d66";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div
          className={backGroundBlue ? "background-blue" : "background-yellow"}
        >
          <div className="card-body">
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city"
                aria-label="Search"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <button className="btn-search" type="submit">
                Search
              </button>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    <p>Loading....</p>;
  }
}
