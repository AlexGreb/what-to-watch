import {createSlice} from '@reduxjs/toolkit';
import {moviesList} from '../../mocks/movies.js';
import {createMovie} from '../../adapters/adapters';

const initialState = {
  moviesList: []
};

const moviesSlice = createSlice({
  name: `movies`,
  initialState,
  reducers: {
    setMoviesList: (state, action) => {
      state.moviesList = action.payload;
    }

  }
});

const {setMoviesList} = moviesSlice.actions;

const Operations = {
  getMoviesList: () => (dispatch) => {
    setTimeout(() => {
      dispatch(setMoviesList(moviesList.map(createMovie)));
    }, 1000);
  }
};

export {setMoviesList, Operations, initialState};
export default moviesSlice.reducer;

