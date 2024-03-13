import React from "react";
import "./WeatherMetainfo.css";
import Thermostat from "../../../../assets/thermostat.svg";
import WaterDrop from "../../../../assets/waterdrop.svg";
function WeatherMetainfo({ data, label, symbol }) {
  return (
    <div className="weather__meta">
      <img
        className="weather__meta__icon"
        src={label === "Feels like" ? Thermostat : WaterDrop}
        alt={label === "Feels like" ? "thermostat icon" : "waterdrop icon"}
      />
      <div className="weather__meta__info">
        <span className="weather__meta__info__data">
          {data}
          {symbol}
        </span>
        <span className="weather__meta__label">{label}</span>
      </div>
    </div>
  );
}

export default WeatherMetainfo;
