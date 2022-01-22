import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {MOVIES_TO_SHOW} from '../../constants/consts.js';
import {namespaces} from '../namespaces.js';
import {Operations as MovieOperations} from '../movies/moviesReducer.js';
import {Operations as UserOperations} from '../user/userReducer.js';

const initialState = {
  currentGenre: `All genres`,
  shownMoviesNumber: MOVIES_TO_SHOW,
  isLoading: false,
  isErrors: false
};

const Operations = {
  // TODO убрать
  fetchData: createAsyncThunk(
      `${namespaces.APP}/fetchData`,
      async (_, {dispatch, fulfillWithValue}) => {
        await dispatch(MovieOperations.fetchMoviesList());
        await dispatch(MovieOperations.fetchPromoMovie());
        await dispatch(UserOperations.checkAuth());
        fulfillWithValue(false);
      })
};


const appSlice = createSlice({
  name: namespaces.APP,
  initialState,
  reducers: {
    setActiveGenre: (state, action) => {
      state.currentGenre = action.payload;
    },
    showMoreMovies: (state, action) => {
      state.shownMoviesNumber = state.shownMoviesNumber + action.payload;
    },
    resetShownMoviesNumber: (state) => {
      state.shownMoviesNumber = MOVIES_TO_SHOW;
    }
  },
  extraReducers: {
    [Operations.fetchData.fulfilled]: (state, action) => {
      state.isLoading = action.payload;
    },
    [Operations.fetchData.pending]: (state) => {
      state.isLoading = true;
    },
    [Operations.fetchData.rejected]: (state) => {
      state.isError = true;
    }
  }
});

const {setActiveGenre, showMoreMovies, resetShownMoviesNumber} = appSlice.actions;

export {Operations, setActiveGenre, showMoreMovies, resetShownMoviesNumber, initialState};
export default appSlice.reducer;
