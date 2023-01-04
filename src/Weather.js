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
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col-4">
          <h1>Sun 24</h1>
          <h2>Today in Kyiv</h2>
        </div>
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Weather icon"
          ></img>
          <div>Clear sky</div>
        </div>
        <div className="col-4">
          <h2>22 °</h2>
          <div>Humidity 15%</div>
          <div>Wind 0 km/h</div>
        </div>
      </div>
    </div>
  );
}
