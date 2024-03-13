export async function getGeoLocation(coords) {
  const api = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.long}&limit=3&units=metric&appid=${process.env.REACT_APP_APIKEY}`
  );
  const responseJson = await api.json();
  return responseJson;
}
