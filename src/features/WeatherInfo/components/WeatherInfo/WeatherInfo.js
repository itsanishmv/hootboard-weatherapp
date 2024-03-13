import React, { useEffect } from "react";
import "./WeatherInfo.css";
import WeatherMetainfo from "../WeatherMetaInfo/WeatherMetainfo";
import { getGeoLocation } from "../../../Form/api/getGeolocation";
import { useLocation } from "react-router-dom";
import { getWeatherInfo } from "../../api/getWeatherInfo";
function WeatherInfo() {
  const location = useLocation();
  useEffect(() => {
    const urlDissect = location.pathname.split("/");
    const locationName = urlDissect[urlDissect.length - 1];
    if (urlDissect.length > 2) {
      getWeatherInfo(locationName).then((data) => console.log(data));
    }
  }, []);
  return (
    <div className="weather__container">
      <div className="weather__main__info">
        <img
          className="weather__cloud__icon"
          src="./cloud.svg"
          alt="cloud image"
        />
        <span className="weather__temperature">13C</span>
        <span style={{ fontSize: "18px" }}>Broken clouds</span>
        <span style={{ fontSize: "18px" }}>Kathmandu, Nepal</span>
      </div>
      <div className="weather__metainfo">
        <WeatherMetainfo />
        <WeatherMetainfo />
      </div>
    </div>
  );
}

export default WeatherInfo;
