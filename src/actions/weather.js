import { fetchWeather } from "../services/weather";
import { FETCH_WEATHER } from "./action-types";
export const fetchWeatherFromService = () => {
  return async dispatch => {
    const weatherDesc = await fetchWeather();
    dispatch({
      type: FETCH_WEATHER,
      weatherDesc
    });
  };
};
