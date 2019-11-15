import { combineReducers } from "redux";

import gifs from "./gifs";
import todos from "./todos";
import weatherDesc from "./weather";
import isLoaded from "./loading";

export default combineReducers({
  gifs,
  todos,
  weatherDesc,
  isLoaded
});
