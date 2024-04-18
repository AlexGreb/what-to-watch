import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './app.jsx';
import {moviesList} from '../../mocks/movies.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import appReducer from '../../store/app/appReducer.ts';
import {initialState} from '../../store/app/appReducer.ts';

Enzyme.configure({adapter: new Adapter()});

describe(`App`, () => {
  it(`simulates click events on title in App`, () => {
    const mockStore = createStore(appReducer, initialState);
    shallow(
        <Provider store={mockStore}>
          <App moviesList={moviesList}/>
        </Provider>
    );
    // expect(app).toHaveBeenCalled();
  });

});

