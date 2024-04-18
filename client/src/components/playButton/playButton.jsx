import React from 'react';
import Button from '../button/button.jsx';
import {dataUrl} from '../../constants/consts.js';
import PropProps from 'prop-types';
import {useNavigate} from 'react-router';

const PlayButton = ({movieId}) => {
  const navigator = useNavigate();

  return (
    <Button onClick={() => navigator(`${dataUrl.FILMS}${movieId}${dataUrl.PLAYER}`)} className="btn--play movie-card__button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Button>
  );
};

PlayButton.propTypes = {
  movieId: PropProps.number.isRequired
};

export default PlayButton;
