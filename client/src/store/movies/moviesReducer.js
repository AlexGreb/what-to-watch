import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {createMovie, createReview} from '../../adapters/adapters';
import {dataUrl} from '../../constants/consts.js';
import {namespaces} from '../namespaces';

const initialState = {
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
      `${namespaces.MOVIES}/fetchMoviesList`,
      async (_, {extra}) => {
        const {data} = await extra.get(dataUrl.FILMS);
        return data.data.map(createMovie);
      }),
  fetchPromoMovie: createAsyncThunk(
      `${namespaces.MOVIES}/promo`,
      async (_, {extra}) => {
        const response = await extra.get(dataUrl.PROMO);
        return createMovie(response.data.data);
      }),
  fetchReviews: createAsyncThunk(
      `${namespaces.MOVIES}/fetchReviews`,
      async (movieId, {extra}) => {
        const response = await extra.get(`${dataUrl.REVIEWS}${movieId}`);
        return response.data.data.map(createReview);
      }
  ),
  fetchComment: createAsyncThunk(
      `${namespaces.MOVIES}/fetchComment`,
      async (reviewData, {extra}) => {
        const response = await extra.post(`${dataUrl.REVIEWS}${reviewData.movieId}`, reviewData.review);
        return response.data;
      }
  ),
  fetchMyListMovies: createAsyncThunk(
      `${namespaces.MOVIES}/fetchMyListMovies`,
      async (_, {extra}) => {
        const response = await extra.get(`${dataUrl.FAVORITE}`);
        return response.data.map(createMovie);
      }
  ),
  fetchChangeFavoriteStateMovie: createAsyncThunk(
      `${namespaces.MOVIES}/fetchChangeFavoriteStateMovie`,
      async (movie, {dispatch, fulfillWithValue, extra}) => {
        const response = await extra.post(`${dataUrl.FAVORITE}${movie.id}/${movie.isFavorite ? 0 : 1}`);
        dispatch(Operations.fetchMoviesList());
        dispatch(Operations.fetchPromoMovie());
        return fulfillWithValue(response.data);
      }
  )
};

const moviesSlice = createSlice({
  name: namespaces.MOVIES,
  initialState,
  reducers: {
    setSendingReviewStatus: (state, action) => {
      state.sendingReviewStatus = action.payload;
    },
  },
  extraReducers: {
    [Operations.fetchMoviesList.fulfilled]: (state, action) => {
      state.loadingMovies = false;
      state.moviesList = action.payload;
    },
    [Operations.fetchMoviesList.pending]: (state) => {
      state.loadingMovies = true;
    },
    [Operations.fetchMoviesList.rejected]: (state) => {
      state.isError = true;
    },
    [Operations.fetchPromoMovie.fulfilled]: (state, action) => {
      state.promoMovie = action.payload;
    },
    [Operations.fetchPromoMovie.rejected]: (state) => {
      state.isError = true;
    },
    [Operations.fetchReviews.fulfilled]: (state, action) => {
      state.reviews = action.payload;
    },
    [Operations.fetchComment.fulfilled]: (state) => {
      state.sendingReviewStatus = true;
    },
    [Operations.fetchComment.rejected]: (state) => {
      state.sendingReviewStatus = false;
    },
    [Operations.fetchMyListMovies.fulfilled]: (state, action) => {
      state.loadingMyMovies = false;
      state.myListMovies = action.payload;
    },
    [Operations.fetchMyListMovies.pending]: (state) => {
      state.loadingMyMovies = true;
    },
    [Operations.fetchMyListMovies.rejected]: (state) => {
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

