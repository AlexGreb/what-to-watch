import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {namespaces} from '../namespaces';
import {authorizationStatus, dataUrl} from '../../constants/consts';

const initialState = {
  isAuthorizationRequired: false,
  authStatus: authorizationStatus.NO_AUTH,
  user: {
    email: ``,
    name: ``,
  },
  loadingUser: false,
  isAuthError: false,
};

const Operations = {
  fetchUser: createAsyncThunk(
      `${namespaces.USER}/fetchUser`,
      async (dataUser, {dispatch, extra, rejectWithValue, fulfillWithValue}) => {
        try {
          const response = await extra.post(dataUrl.LOGIN, dataUser);
          dispatch(userSlice.actions.setAuthorizationStatus(authorizationStatus.AUTH));
          return fulfillWithValue(response.data);
        } catch (e) {
          return rejectWithValue(true);
        }
      }),
  checkAuth: createAsyncThunk(
      `${namespaces.USER}/checkAuth`,
      async (_, {dispatch, extra, rejectWithValue, fulfillWithValue}) => {
        try {
          const response = await extra.get(dataUrl.LOGIN);
          dispatch(userSlice.actions.setAuthorizationStatus(authorizationStatus.AUTH));
          return fulfillWithValue(response.data);
        } catch (e) {
          return rejectWithValue(authorizationStatus.NO_AUTH);
        }
      })
};

const userSlice = createSlice({
  name: namespaces.USER,
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuthorizationRequired = action.payload;
    },
    setError: (state, action) => {
      state.isAuthError = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuthorizationStatus: (state, action) => {
      state.authStatus = action.payload;
    },
  },
  extraReducers: {
    [Operations.fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [Operations.fetchUser.rejected]: (state, action) => {
      state.isAuthError = action.payload;
    },
    [Operations.checkAuth.fulfilled]: (state, action) => {
      state.loadingUser = false;
      state.user = action.payload;
    },
    [Operations.checkAuth.pending]: (state) => {
      state.loadingUser = true;
    },
    [Operations.checkAuth.rejected]: (state, action) => {
      state.loadingUser = false;
      state.authStatus = action.payload;
    }
  }
});

const {setAuth} = userSlice.actions;

export {setAuth, Operations};
export default userSlice.reducer;
