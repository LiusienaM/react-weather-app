import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
