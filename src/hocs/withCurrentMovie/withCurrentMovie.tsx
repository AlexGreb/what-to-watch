import React, {ComponentType} from 'react';
import {getMovieById} from '../../helpers/utils';
import {Movie} from '../../types/movie';

type HOCProps = {
  movie: Movie
}

type ComponentProps = {
  movies: Array<Movie>;
  id: number;
}

const withCurrentMovie = <T extends ComponentProps>(Component: ComponentType<T>): ComponentType<Omit<T, keyof HOCProps>> => {
  type ComponentProps = Omit<T, keyof HOCProps>;

  const wrappedComponent = (props: ComponentProps): JSX.Element => {
    const {id, movies} = props;
    const movie = getMovieById(movies, Number(id));
    return (
      <Component {...props as T} movie={movie}/>
    );
  };
  return wrappedComponent;
};

export default withCurrentMovie;

