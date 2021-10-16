import {configureStore} from '@reduxjs/toolkit';
import appReducer from './app/appReducer.js';
import moviesReducer from './movies/moviesReducer.js';
import {namespaces} from './namespaces.js';

export const store = configureStore({
  reducer: {
    [namespaces.APP]: appReducer,
    [namespaces.MOVIES]: moviesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true
  // eslint-disable-next-line no-undef
  // devTools: process.env.NODE_ENV !== `production`,
});
