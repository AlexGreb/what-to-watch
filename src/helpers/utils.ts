import {Movie} from "../types/movie";

export const getGenresList = (movies: Array<Movie>):Array<string>  => {
  return [`All genres`, ...new Set(movies.map((movie: Movie): string => movie.genre))].slice(0, 9);
};

export const getFilterMoviesByGenre = (movies: Array<Movie>, genre: string): Array<Movie> | [] => {
  return movies.filter((it) => it.genre === genre);
};

export const getMoviesByGenre = (genre: string, movies: Array<Movie>): Array<Movie> | [] => {
  return genre === `All genres` ? movies : getFilterMoviesByGenre(movies, genre);
};

export const getCountedMoviesList = (movies: Array<Movie>, count: number = movies.length): Array<Movie> | [] => {
  return movies.slice(0, count);
};

export const getMovieById = (movies: Array<Movie>, id: number): Movie => {
  return movies.find((it) => it.id === id);
};
