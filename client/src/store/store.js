import {configureStore} from '@reduxjs/toolkit';
import appReducer from './app/appReducer';
import moviesReducer from './movies/moviesReducer.js';
import userReducer from './user/userReducer.js';
import {namespaces} from './namespaces';
import {createApi} from '../api.js';


const api = createApi((...args) => store.dispatch(...args));

export const store = configureStore({
  reducer: {
    [namespaces.APP]: appReducer,
    [namespaces.MOVIES]: moviesReducer,
    [namespaces.USER]: userReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    });
  },
  devTools: true
  // eslint-disable-next-line no-undef
  // devTools: process.env.NODE_ENV !== `production`,
});

// export type State = ReturnType<typeof store.getState>
