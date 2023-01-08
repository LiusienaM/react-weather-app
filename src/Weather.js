import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Sun 12:00",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      humidity: response.data.main.humidity,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-secondary"
              />
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-4">
            <h1>{weatherData.date}</h1>
            <ul>
              <li className="Cityname">Today in {weatherData.city}</li>
              <li className="Condition text-capitalize">
                {weatherData.description}
              </li>
            </ul>
          </div>
          <div className="col-4 text-center">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="Weathericon"
            ></img>
          </div>
          <div className="col-4">
            <div className="Temp">{Math.round(weatherData.temperature)} °</div>
            <ul>
              <li className="Humidity">Humidity {weatherData.humidity}%</li>
              <li className="Wind">Wind {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "499ae2429cb698163d7523b3dadcc6ef";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
