import fetchGiphy from "../services/gifs";
import { FETCH_GIFS, DELETE_GIF } from "./action-types";
export const fetchGiphyFromService = () => {
  console.log("test getting called");
  return async dispatch => {
    const gifs = await fetchGiphy();
    console.log("got the gifs");
    dispatch({
      type: FETCH_GIFS,
      gifs
    });
  };
  /* Converting to Async */
  // return dispatch => {
  //   fetchGiphy().then(gifs => {
  //     console.log("got the gifs");
  //     dispatch({
  //       type: FETCH_GIFS,
  //       gifs
  //     });
  //   });
  // };
};

export const deleteGif = id => {
  console.log("test deleteGif", id);
  return {
    type: DELETE_GIF,
    id
  };
};
