import React, { useState } from "react";

function useGetCurrLocation() {
  const [currDeviceCoords, setCurrDeviceCoords] = useState();
  function getCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
      const obj = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };
      setCurrDeviceCoords(obj);
    });
  }

  return {
    currDeviceCoords,
    getCoords,
  };
}

export default useGetCurrLocation;
