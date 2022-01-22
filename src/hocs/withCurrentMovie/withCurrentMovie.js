import React from 'react';
import {getMovieById} from '../../helpers/utils';

const withCurrentMovie = (Component) => {
  const wrappedComponent = (props) => {
    const {id, movies} = props;
    const movie = getMovieById(movies, Number(id));
    return (
      <Component {...props} movie={movie}/>
    );
  };
  return wrappedComponent;
};

export default withCurrentMovie;

