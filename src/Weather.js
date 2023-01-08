import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h1>Sun 24</h1>
          <ul>
            <li className="Cityname">Today in Kyiv</li>
            <li className="Condition">Clear sky</li>
          </ul>
        </div>
        <div className="col-4 text-center">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Weather icon"
            className="Weathericon"
          ></img>
        </div>
        <div className="col-4">
          <div className="Temp">22 °</div>
          <ul>
            <li className="Humidity">Humidity 15%</li>
            <li className="Wind">Wind 0 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
