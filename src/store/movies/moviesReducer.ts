import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {createMovie, createReview} from '../../adapters/adapters';
import {AppRoute} from '../../constants/consts.ts';
import {Namespaces} from '../storeNamespaces';
import {Movie, MovieReviews} from '../../types/movie';

type InitialState {
  promoMovie?: Movie | {},
  loadingMovies: boolean,
  loadingMyMovies: boolean,
  reviews: MovieReviews | [],
  sendingReviewStatus: boolean,
  myListMovies: Array<Movie> | [],
  moviesList: Array<Movie> | [],
  isError: boolean
}

const initialState:InitialState = {
  promoMovie: {},
  loadingMovies: false,
  loadingMyMovies: false,
  reviews: [],
  sendingReviewStatus: false,
  myListMovies: [],
  moviesList: [],
  isError: false
};

const Operations = {
  fetchMoviesList: createAsyncThunk(
      `${Namespaces.MOVIES}/fetchMoviesList`,
      async (_, {extra}) => {
        const response = await extra.get(AppRoute.FILMS);
        return response.data.map(createMovie);
      }),
  fetchPromoMovie: createAsyncThunk(
      `${Namespaces.MOVIES}/fetchPromoMovie`,
      async (_, {extra}) => {
        const response = await extra.get(AppRoute.PROMO);
        const a = await response.json()
        return createMovie(response.data);
      }),
  fetchReviews: createAsyncThunk(
      `${Namespaces.MOVIES}/fetchReviews`,
      async (movieId: number, {extra}) => {
        const response = await extra.get(`${AppRoute.REVIEWS}${movieId}`);
        return response.data.map(createReview);
      }
  ),
  fetchComment: createAsyncThunk(
      `${Namespaces.MOVIES}/fetchComment`,
      async (reviewData, {extra}) => {
        const response = await extra.post(`${AppRoute.REVIEWS}${reviewData.movieId}`, reviewData.review);
        return response.data;
      }
  ),
  fetchMyListMovies: createAsyncThunk(
      `${Namespaces.MOVIES}/fetchMyListMovies`,
      async (_, {extra}) => {
        const response = await extra.get(`${AppRoute.FAVORITE}`);
        return response.data.map(createMovie);
      }
  ),
  fetchChangeFavoriteStateMovie: createAsyncThunk(
      `${Namespaces.MOVIES}/fetchChangeFavoriteStateMovie`,
      async (movie: Movie, {dispatch, fulfillWithValue, extra}) => {
        const response = await extra.post(`${AppRoute.FAVORITE}${movie.id}/${movie.isFavorite ? 0 : 1}`);
        dispatch(Operations.fetchMoviesList());
        dispatch(Operations.fetchPromoMovie());
        return fulfillWithValue(response.data);
      }
  )
};

const moviesSlice = createSlice({
  name: Namespaces.MOVIES,
  initialState,
  reducers: {
    setSendingReviewStatus: (state, action) => {
      state.sendingReviewStatus = action.payload;
    },
  },
  extraReducers: {
    [Operations.fetchMoviesList.fulfilled.type]: (state, action) => {
      state.loadingMovies = false;
      state.moviesList = action.payload;
    },
    [Operations.fetchMoviesList.pending.type]: (state) => {
      state.loadingMovies = true;
    },
    [Operations.fetchMoviesList.rejected.type]: (state) => {
      state.isError = true;
    },
    [Operations.fetchPromoMovie.fulfilled.type]: (state, action) => {
      state.promoMovie = action.payload;
    },
    [Operations.fetchPromoMovie.rejected.type]: (state) => {
      state.isError = true;
    },
    [Operations.fetchReviews.fulfilled.type]: (state, action) => {
      state.reviews = action.payload;
    },
    [Operations.fetchComment.fulfilled.type]: (state) => {
      state.sendingReviewStatus = true;
    },
    [Operations.fetchComment.rejected.type]: (state) => {
      state.sendingReviewStatus = false;
    },
    [Operations.fetchMyListMovies.fulfilled.type]: (state, action) => {
      state.loadingMyMovies = false;
      state.myListMovies = action.payload;
    },
    [Operations.fetchMyListMovies.pending.type]: (state) => {
      state.loadingMyMovies = true;
    },
    [Operations.fetchMyListMovies.rejected.type]: (state) => {
      state.loadingMyMovies = false;
      state.isError = true;
    }
  }
});

export const {setSendingReviewStatus} = moviesSlice.actions;
export {
  Operations,
  initialState
};
export default moviesSlice.reducer;

