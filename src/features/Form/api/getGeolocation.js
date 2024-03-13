export async function getGeoLocation(coords) {
  const api = await fetch(
    `https://api.openweathermap.org/geo/1.0/reverse?lat=${coords?.lat}&lon=${coords?.long}&limit=3&appid=${process.env.REACT_APP_APIKEY}`
  );
  const responseJson = await api.json();
  return responseJson;
}
