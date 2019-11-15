import { TOGGLE_LOADING } from "../actions/action-types";

const isLoaded = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return !state;
    default:
      return state;
  }
};

export default isLoaded;
