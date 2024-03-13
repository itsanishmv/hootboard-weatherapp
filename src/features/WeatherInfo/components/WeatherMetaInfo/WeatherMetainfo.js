import React from "react";
import "./WeatherMetainfo.css";
function WeatherMetainfo() {
  return (
    <div className="weather__meta">
      <img
        className="weather__meta__icon"
        src="./arrowback.svg"
        alt="temperature icon"
      />
      <div className="weather__meta__info">
        <span>18C</span>
        <span>Feels like</span>
      </div>
    </div>
  );
}

export default WeatherMetainfo;
