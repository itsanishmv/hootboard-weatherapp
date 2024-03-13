export async function getWeatherInfo(location) {
  const api = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_APIKEY}`
  );
  const response = await api.json();
  return response;
}
