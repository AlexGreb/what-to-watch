// import {createAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {MOVIES_TO_SHOW} from '../../constants/consts.js';

const initialState = {
  currentGenre: `All genres`,
  shownMoviesNumber: MOVIES_TO_SHOW,
  moviesList: []
};

const appSlice = createSlice({
  name: `app`,
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
    },
  }
});

const {setActiveGenre, showMoreMovies, resetShownMoviesNumber} = appSlice.actions;

// const ActionCreator = {
//   changeCurrentGenre: (currentGenre) => (dispatch) => {
//     dispatch(filterChange(currentGenre));
//   },

//   showMoreMovies: () => (dispatch) => {
//     dispatch(showMoreMovies(MOVIES_TO_SHOW));
//   },
// };

export {setActiveGenre, showMoreMovies, resetShownMoviesNumber, initialState};
export default appSlice.reducer;
