import userReducer from './userReducer.js';
import {setAuth, Operations} from './userReducer.js';
import MockAdapter from 'axios-mock-adapter';
import {dataUrl} from '../../constants/consts.js';
import {createApi} from '../../api.js';

const dispatch = jest.fn();
const api = createApi(dispatch);


describe(`userReducer`, () => {
  it(`Should set auth`, () => {
    expect(userReducer({isAuthorizationRequired: false}, setAuth(true))).toEqual({isAuthorizationRequired: true});
  });
});

describe(`userReducer Operations`, () => {
  const apiMock = new MockAdapter(api);
  it(`The reducers should return a correct user`, async () => {
    const initialState = {
      user: {
        email: ``,
        name: ``,
      }
    };
    const mockUserResponseData = {
      id: 1,
      email: `Oliver.conner@gmail.com`,
      name: `Oliver.conner`,
      avatarUrl: `img/1.png`,
      isPro: false
    };

    const userData = {
      email: `test@test.ru`,
      password: `test`
    };

    apiMock.onPost(dataUrl.LOGIN).reply(200, {
      ...mockUserResponseData
    });
    const action = await Operations.fetchUser(userData);
    const getState = jest.fn();
    const fetchUserAction = await action(dispatch, getState, api);
    expect(userReducer(initialState, fetchUserAction)).toEqual({user: mockUserResponseData});
  });
});
