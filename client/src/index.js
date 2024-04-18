import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {store} from './store/store.js';
import {Provider} from 'react-redux';
import {Operations} from './store/app/appReducer.js';
import {
  BrowserRouter
} from "react-router-dom";
import ScrollToTop from './components/scrollToTop/ScrollToTop.js';
import ResetToInitData from './components/resetToInitData/resetToInitData.js';

store.dispatch(Operations.fetchData());
ReactDOM.render(

    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop/>
        <ResetToInitData/>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.getElementById(`root`));
