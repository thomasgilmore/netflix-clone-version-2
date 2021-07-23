const getMoviesByCategory = async (category) => {
  console.log("Is this working!!!!");
  const endpoint = `https://api.themoviedb.org/3/movie/${category}/similar?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US&page=1`;
  const result = await fetch(endpoint).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Something's wrong");
    }
  });
  console.log(result);
  return result;
};

const getMoviesByTrendingAllDay = async () => {
  const endpoint =
    "https://api.themoviedb.org/3/trending/all/day?api_key=" +
    process.env.REACT_APP_MOVIE_DB_API;
  const result = await fetch(endpoint).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Something's wrong");
    }
  });

  return result;
};

const getTvShowByPopular = async () => {
  const endpoint =
    "https://api.themoviedb.org/3/tv/popular?api_key=" +
    process.env.REACT_APP_MOVIE_DB_API;
  const result = await fetch(endpoint).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Something's wrong");
    }
  });

  return result;
};

export { getMoviesByCategory, getMoviesByTrendingAllDay, getTvShowByPopular };
