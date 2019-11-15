import { FETCH_GIFS, DELETE_GIF } from "../actions/action-types";

const gifs = (state = [], action) => {
  switch (action.type) {
    case FETCH_GIFS:
      return action.gifs;
    case DELETE_GIF:
      return state.filter(gif => gif.id !== action.id);
    default:
      return state;
  }
};

export default gifs;
