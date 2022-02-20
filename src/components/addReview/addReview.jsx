import React from 'react';
import Header from '../header/header.tsx';
import AddReviewForm from '../addReviewForm/addReviewForm.jsx';
import PropTypes from 'prop-types';

const AddReview = ({movie}) => {
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={movie.background} alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header/>
        <div className="movie-card__poster movie-card__poster--small">
          <img src={movie.poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm movie={movie}/>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  movie: PropTypes.object
};

export default AddReview;
