import React from "react";
import "./WeatherInfo.css";
import WeatherMetainfo from "../WeatherMetaInfo/WeatherMetainfo";
function WeatherInfo() {
  return (
    <div className="weather__container">
      <div className="weather__metainfo">
        <WeatherMetainfo />
        <WeatherMetainfo />
      </div>
    </div>
  );
}

export default WeatherInfo;
