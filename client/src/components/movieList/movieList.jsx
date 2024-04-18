import React from 'react';
import SmallMovieCard from '../smallMovieCard/smallMovieCard.jsx';
import PropTypes from 'prop-types';
import withActiveCard from '../../hocs/withActiveCard/withActiveCard.jsx';

const WrappedSmallMovieCard = withActiveCard(SmallMovieCard);
const MovieList = ({moviesList}) => {
  return (
    <>
      <div className="catalog__movies-list">
        {
          moviesList.map((it) => {
            return (
              <WrappedSmallMovieCard movie={it} key={it.id}/>
            );
          })
        }
      </div>
    </>
  );
};

MovieList.propTypes = {
  moviesList: PropTypes.array
};

export default MovieList;
