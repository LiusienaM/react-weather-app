import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  Axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <WeatherIcon code="01d" size={38} />
          <div className="Forecast-day">Wed</div>
          <div className="Forecast-temp">
            <span className="Forecast-temp-max">14° </span>
            <span className="Forecast-temp-min">5°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
