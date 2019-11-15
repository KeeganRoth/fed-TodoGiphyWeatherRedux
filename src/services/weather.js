export const fetchWeather = () => {
  let API_KEY = "1a98602815c7ca59ec016f0c04411333";
  const endpoint = `https://api.openweathermap.org/data/2.5/forecast/daily?q=davenport&cnt=1&units=imperial&appid=${API_KEY}`;
  return fetch(endpoint)
    .then(res => res.json())
    .then(({ list }) => {
      return list[0].weather[0].description;
    });
};
