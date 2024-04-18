import React from 'react';
import PropTypes from 'prop-types';

const ShowMore = ({onClick}) => {
  const clickHandler = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button className="catalog__button"
      onClick={clickHandler}
      type="button">Show more</button>
  );
};

ShowMore.propTypes = {
  onClick: PropTypes.func
};

export default ShowMore;
