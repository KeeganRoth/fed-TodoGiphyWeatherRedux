function fetchGiphy(searchText = "samoyed") {
  const value = searchText;
  const limit = 10;

  const GIF_ENDPOINT = `https://api.giphy.com/v1/gifs/search?api_key=lMhILyNXwPuIkfQPpQWmlKACyetM6eWS&q=&limit=25&offset=0&rating=G&lang=en&q=${value}&limit=${limit}`;

  // return fetch(GIF_ENDPOINT)
  //   .then(res => res.json())
  //   .then(({ data }) => {
  //     return data.map(gif => gif.images.fixed_width.url);
  //   });

  return fetch(GIF_ENDPOINT)
    .then(res => res.json())
    .then(data => data.data);
}

export default fetchGiphy;
