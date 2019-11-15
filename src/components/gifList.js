import React from "react";

const GifList = ({ gifs, deleteGifAction }) => {
  console.log("Gifs", gifs);
  const renderGifs = gifs => {
    return gifs.map(gif => (
      <li key={gif.id} onClick={() => deleteGifAction(gif.id)}>
        <img src={gif.images.fixed_width.url} alt={gif.title} />
      </li>
    ));
  };
  return <ol>{renderGifs(gifs)}</ol>;
};

export default GifList;
