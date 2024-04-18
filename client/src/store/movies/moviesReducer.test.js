// import {setMoviesList, Operations} from './moviesReducer.js';
import {Operations} from './moviesReducer.js';
import moviesReducer from './moviesReducer.js';
import MockAdapter from 'axios-mock-adapter';
import {AppRoute} from '../../constants/consts.ts';
import {moviesList, promoMovie, reviews} from '../../mocks/movies.js';
import {createMovie, createReview} from '../../adapters/adapters.js';
import {createApi} from '../../api.js';

const dispatch = jest.fn();
const api = createApi(dispatch);
// describe(`MoviesReducer`, () => {
//   it(`The reducer should return correct movies`, () => {
//     expect(moviesReducer({
//       moviesList: []
//     },
//     setMoviesList(moviesList))).toEqual({
//       moviesList
//     });
//   });
// });

describe(`MoviesReducer Operations`, () => {
  const apiMock = new MockAdapter(api);
  it(`The reducers should return a correct promo movie`, async () => {
    const initialState = {
      promoMovie: {}
    };
    apiMock.onGet(AppRoute.PROMO).reply(200, {
      ...promoMovie
    });
    const action = await Operations.fetchPromoMovie();
    const getState = jest.fn();
    const fetchMoviesListAction = await action(dispatch, getState, api);
    expect(moviesReducer(initialState, fetchMoviesListAction)).toEqual({promoMovie: createMovie(promoMovie)});
  });

  it(`The reducers should return moviesList`, async () => {
    const initialState = {
      moviesList: []
    };
    const mockMoviesList = moviesList.map(createMovie);
    apiMock.onGet(AppRoute.FILMS).reply(200, [
      ...moviesList
    ]);
    const action = await Operations.fetchMoviesList();
    const getState = jest.fn();
    const fetchMoviesListAction = await action(dispatch, getState, api);
    expect(moviesReducer(initialState, fetchMoviesListAction)).toEqual({moviesList: mockMoviesList});
  });

  it(`The reducers should return reviews`, async () => {
    const initialState = {
      reviews: []
    };
    const mockReviewsList = reviews.map(createReview);
    apiMock.onGet(AppRoute.REVIEWS).reply(200, [
      ...reviews
    ]);
    const action = await Operations.fetchReviews(reviews[0].id);
    const getState = jest.fn();
    const fetchReviewsListAction = await action(dispatch, getState, api);
    expect(moviesReducer(initialState, fetchReviewsListAction)).toEqual({reviews: mockReviewsList});
  });
});
