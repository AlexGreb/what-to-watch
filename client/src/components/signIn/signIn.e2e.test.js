/**
 * @jest-environment jsdom
 */
import React from 'react';
import SignIn from './signIn.jsx';
import {render, fireEvent, waitFor} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from '../../store/store.js';
import * as reactRedux from 'react-redux';

const useDispatchMock = jest.spyOn(reactRedux, `useDispatch`);
beforeEach(() => {
  useDispatchMock.mockClear();
});
describe(`SignIn`, () => {
  it(`Should call function on submit form`, async () => {
    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);

    const {getByText} = await render(
        <Provider store={store}>
          <SignIn/>
        </Provider>
    );

    await fireEvent.click(getByText(`Sign in`, {selector: `button`}));
    await waitFor(() => expect(mockDispatch).toHaveBeenCalled());
  });
});
