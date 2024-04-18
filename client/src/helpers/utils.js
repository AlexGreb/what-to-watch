export const getGenresList = (movies) => {
  return [`All genres`, ...new Set(movies.map((movie) => movie.genre))].slice(0, 9);
};

export const filterMoviesByGenre = (movies, genre) => {
  return movies.filter((it) => it.genre === genre);
};

export const getMoviesByGenre = (genre, movies) => {
  return genre === `All genres` ? movies : filterMoviesByGenre(movies, genre);
};

export const getCountedMoviesList = (movies, count = movies.length) => {
  return movies.slice(0, count);
};

export const getMovieById = (movies, id) => {
  return movies.find((it) => it.id === id);
};
