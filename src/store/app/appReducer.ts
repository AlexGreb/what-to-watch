import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {MOVIES_TO_SHOW} from '../../constants/consts';
import {Namespaces} from '../storeNamespaces';
import {Operations as MovieOperations} from '../movies/moviesReducer.js';
import {Operations as UserOperations} from '../user/userReducer.js';
import {State} from '../store';

const initialState = {
  currentGenre: `All genres`,
  shownMoviesNumber: MOVIES_TO_SHOW,
  isLoading: false,
  isErrors: false
};

const Operations = {
  fetchData: createAsyncThunk(
      `${Namespaces.APP}/fetchData`,
      async (_, {dispatch, fulfillWithValue}) => {
        await dispatch(MovieOperations.fetchMoviesList());
        await dispatch(MovieOperations.fetchPromoMovie());
        await dispatch(UserOperations.checkAuth());
        fulfillWithValue(false);
      })
};


const appSlice = createSlice({
  name: Namespaces.APP,
  initialState,
  reducers: {
    setActiveGenre: (state, action: PayloadAction<string>) => {
      state.currentGenre = action.payload;
    },
    showMoreMovies: (state, action: PayloadAction<number>) => {
      state.shownMoviesNumber = state.shownMoviesNumber + action.payload;
    },
    resetShownMoviesNumber: (state) => {
      state.shownMoviesNumber = MOVIES_TO_SHOW;
    }
  },
  extraReducers: {
    [Operations.fetchData.fulfilled.type]: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    [Operations.fetchData.pending.type]: (state) => {
      state.isLoading = true;
    },
    [Operations.fetchData.rejected.type]: (state) => {
      state.isErrors = true;
    }
  }
});

const {setActiveGenre, showMoreMovies, resetShownMoviesNumber} = appSlice.actions;

export {Operations, setActiveGenre, showMoreMovies, resetShownMoviesNumber, initialState};
export default appSlice.reducer;
