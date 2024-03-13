import React, { useEffect, useState } from "react";
import "./WeatherInfo.css";
import WeatherMetainfo from "../WeatherMetaInfo/WeatherMetainfo";
import { useLocation } from "react-router-dom";
import { getWeatherInfo } from "../../api/getWeatherInfo";
import Cloud from "../../../../assets/cloud.svg";
import Location from "../../../../assets/location.svg";

function WeatherInfo() {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const urlDissect = location?.pathname?.split("/");
    const locationName = urlDissect[urlDissect?.length - 1];

    if (urlDissect?.length > 2) {
      getWeatherInfo(locationName)
        .then((data) => setData(data))
        .catch((error) => setError(error.message));
    }
  }, [location?.pathname]);
  return (
    <>
      {error ? (
        <div className="city__not__found">
          <img src={Cloud} alt="" />
          {error}
        </div>
      ) : (
        <div className="weather__container">
          <div className="weather__main__info">
            <img
              className="weather__cloud__icon"
              src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@4x.png`}
              alt="cloud"
            />
            <span className="weather__temperature">{data?.main?.temp}°C</span>
            <span className="weather__description">
              {data?.weather[0]?.description}
            </span>
            <span className="weather__location">
              <img src={Location} alt="location" />
              {data?.name}, {data?.sys?.country}
            </span>
          </div>
          <div className="weather__metainfo">
            <WeatherMetainfo
              data={data?.main?.feels_like}
              label="Feels like"
              symbol="°C"
            />
            <WeatherMetainfo
              data={data?.main?.humidity}
              label="Humidity"
              symbol="%"
            />
          </div>
        </div>
      )}{" "}
    </>
  );
}

export default WeatherInfo;
