import React, { useEffect, useState } from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import { getGeoLocation } from "../../api/getGeolocation";
import useGetCurrLocation from "../../hooks/useGetCurrLocation";
const Form = () => {
  const { currDeviceCoords, getCoords } = useGetCurrLocation();
  const [input, setInput] = useState();
  const router = useNavigate();
  function getWeatherData(locationInput) {
    console.log(locationInput);
  }
  function someFunc(e) {
    if (e.key === "Enter") {
      getWeatherData(input);
    }
  }
  useEffect(() => {
    if (currDeviceCoords) {
      getGeoLocation(currDeviceCoords).then((data) => {
        if (data) {
          router(`/weather/${data[0].name}`);
        }
      });
    }
  }, [currDeviceCoords]);

  return (
    <div className="form__container">
      <div className="form__body">
        <Input handler={setInput} onEnter={someFunc} />
        <span className="form__or">or</span>
        <Button handler={getCoords} />
      </div>
    </div>
  );
};

export default Form;
