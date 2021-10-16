import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import SmallMovieCard from '../movieList/movieList.jsx';
import Footer from '../footer/footer.jsx';
import Tabs from '../tabs/tabs.jsx';
import {tabs} from '../../constants/consts.js';
import MoviePageDetails from '../moviePageDetails/moviePageDetails.jsx';
import MoviePageOverview from '../moviePageOverview/moviepageOverview.jsx';
import MoviePageReviews from '../moviePageReviews/moviePageReviews.jsx';


const MoviePage = ({movie, movies, reviews, activeTab, onChangeActiveTab}) => {
  const getTabLinks = () => {
    return Object.values(tabs);
  };

  const tabsMap = {
    [tabs.DETAILS]: <MoviePageDetails movie={movie}/>,
    [tabs.OVERVIEW]: <MoviePageOverview movie={movie}/>,
    [tabs.REVIEWS]: <MoviePageReviews reviews={reviews}/>
  };

  const renderTab = (tabDetails) => {
    return tabsMap[tabDetails];
  };

  const getSimilarMovies = (moviesList) => {
    return moviesList.filter((it) => {
      return it.genre === movie.genre;
    });
  };

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={movie.poster} alt={movie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{movie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{movie.genre}</span>
                <span className="movie-card__year">{movie.date}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={movie.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <Tabs tabNavs={getTabLinks()}
                tabDetails={renderTab(activeTab)}
                activeTab={activeTab}
                onChangeActiveTab={onChangeActiveTab}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <SmallMovieCard moviesList={getSimilarMovies(movies)}/>
        </section>
        <Footer/>
      </div>
    </>
  );
};

MoviePage.propTypes = {
  movie: PropTypes.object,
  movies: PropTypes.array,
  reviews: PropTypes.array,
  activeTab: PropTypes.string,
  onChangeActiveTab: PropTypes.func
};

export default MoviePage;
