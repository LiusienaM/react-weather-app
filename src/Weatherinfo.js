import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="Cityname">Today in {props.data.city}</div>
        <div className="col-4">
          <h1>
            <FormatedDate date={props.data.date} />
          </h1>
          <ul>
            <li className="Condition text-capitalize">
              {props.data.description}
            </li>
          </ul>
        </div>
        <div className="col-4 text-center">
          <WeatherIcon code={props.data.icon} size={80} />
        </div>
        <div className="col-4">
          <div className="Temp">{Math.round(props.data.temperature)} °</div>
          <ul>
            <li className="Humidity">Humidity {props.data.humidity}%</li>
            <li className="Wind">Wind {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
