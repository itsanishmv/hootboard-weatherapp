import React from "react";

function WeatherMetainfo() {
  return (
    <div className="weather__feelslike">
      <img
        className="weather__feelslike__icon"
        src="./"
        alt="temperature icon"
      />
      <div className="weather__feelslike__info">
        <span>18C</span>
        <span>Feels like</span>
      </div>
    </div>
  );
}

export default WeatherMetainfo;
