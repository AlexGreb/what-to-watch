import React from 'react';
import Button from '../button/button.jsx';
import PropTypes from 'prop-types';
import {Operations} from '../../store/movies/moviesReducer.js';
import {useDispatch} from 'react-redux';

const AddMyListButton = ({movie}) => {
  const dispatch = useDispatch();

  const toggleFavoriteMovieHandler = () => {
    dispatch(Operations.fetchChangeFavoriteStateMovie(movie));
  };

  const renderIcon = () => {
    return (
      <svg viewBox="0 0 19 20" width="19" height="20">
        {
          movie.isFavorite ?
            <use xlinkHref="#in-list"></use>
            :
            <use xlinkHref="#add"></use>
        }
      </svg>
    );
  };

  return (
    <Button className="btn--list movie-card__button" onClick={() => toggleFavoriteMovieHandler()}>
      {
        renderIcon()
      }
      <span>My list</span>
    </Button>
  );
};

AddMyListButton.propTypes = {
  movie: PropTypes.object.isRequired
};

export default AddMyListButton;
