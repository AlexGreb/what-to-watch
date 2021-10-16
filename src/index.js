import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app.jsx';
import {store} from './store/store.js';
import {Provider} from 'react-redux';
import {Operations} from './store/movies/moviesReducer.js';

store.dispatch(Operations.getMoviesList());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`));
