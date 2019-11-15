import { FETCH_WEATHER } from "../actions/action-types";

const weatherDesc = (state = "", action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.weatherDesc;
    default:
      return state;
  }
};

export default weatherDesc;
