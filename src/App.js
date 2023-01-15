import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://luminous-gingersnap-d193d9.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Liusiena M
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/LiusienaM/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://ornate-paprenjak-36607c.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
