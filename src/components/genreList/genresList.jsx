import React from 'react';
import PropTypes from 'prop-types';

const GenresList = ({genres, onFilterChange, currentGenre}) => {
  const handleFilterChange = (genre) => {
    return (e) => {
      e.preventDefault();
      onFilterChange(genre);
    };
  };

  const renderGenreItem = (genresList) => {
    return (
      genresList.map((it, index) => {
        const itemClass = it === currentGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
        return (
          <li className={itemClass}
            key={it + index}
          >
            <a href="#"
              onClick={handleFilterChange(it)}
              className="catalog__genres-link">{it}</a>
          </li>
        );
      })
    );
  };

  return (
    <ul className="catalog__genres-list">
      {
        renderGenreItem(genres)
      }
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired
};

export default GenresList;
