export async function getWeatherInfo(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_APIKEY}`
  );
  if (!response.ok) {
    throw new Error("City not found");
  }

  return await response?.json();
}
