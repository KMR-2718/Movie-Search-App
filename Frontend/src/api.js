const API_KEY = import.meta.env.VITE_API_KEY;

export const searchMovies = async (query) => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
  );

  return res.json();
};