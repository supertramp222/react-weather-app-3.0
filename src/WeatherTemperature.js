import React from "react";

export default function WeatherTemperature(props) {
  //If unit ist über 20°C, färbe mir den Background gelb, else blau
  let temperature = Math.round(props.celsius);

  return (
    <div>
      <div className="clearfix weather-temperature">
        <h1>{temperature}</h1>
        <span className="temperature ">
          <h3>°C</h3>
        </span>
      </div>
    </div>
  );
}

/*Celsius to Fahrenheit
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <div className="clearfix weather-temperature">
          <h1>{Math.round(props.celsius)}</h1>
          <span className="temperature ">
            <h3>
              °C | 
              <a href="/" onClick={showFahrenheit}>
                °F
              </a>{" "}
            </h3>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="clearfix weather-temperature">
          <h1>{Math.round(fahrenheit())}</h1>
          <span className="temperature ">
            <h3>
              {" "}
              <a href="/" onClick={showCelsius}>
                °C
              </a>{" "}
              {""} | °F
            </h3>
          </span>
        </div>
      </div>
    );
  }*/
