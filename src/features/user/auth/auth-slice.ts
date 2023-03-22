import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { loginUser, registerUser } from './auth-api';
import { UserCredentials } from '../../../models/user-model';
import { RequestResponse, RequestStatus, Status } from '../../../models/models';

interface AuthState {
  status: Status;
  registerStatus: RequestStatus;
  loginStatus: RequestStatus;
  registerMsg: string;
  loginMsg: string;
}

const initialState: AuthState = {
  status: 'idle',
  registerStatus: 'idle',
  loginStatus: 'idle',
  registerMsg: '',
  loginMsg: '',
};

export const registerNewUser = createAsyncThunk(
  'authSlice/registerNewUser',
  async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());

    const apiRes = await registerUser(newUser as UserCredentials);
    const data: RequestResponse = await apiRes.json();

    if (!apiRes.ok) {
      throw new Error(data.msg);
    }

    return data;
  }
);

export const loginNewUser = createAsyncThunk(
  'authSlice/loginNewUser',
  async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());

    const apiRes = await loginUser(newUser as UserCredentials);
    const data: RequestResponse = await apiRes.json();

    if (!apiRes.ok) {
      throw new Error(data.msg);
    }

    return data;
  }
);

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle';
      state.registerStatus = 'idle';
      state.loginStatus = 'idle';
      state.registerMsg = '';
      state.loginMsg = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerNewUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        registerNewUser.fulfilled,
        (state, action: PayloadAction<RequestResponse>) => {
          state.status = 'idle';
          state.registerStatus = 'success';
          state.registerMsg = action.payload.msg;
        }
      )
      .addCase(registerNewUser.rejected, (state, action: any) => {
        state.status = 'failed';
        state.registerStatus = 'error';
        state.registerMsg = action.error.message;
      })

      .addCase(loginNewUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        loginNewUser.fulfilled,
        (state, action: PayloadAction<RequestResponse>) => {
          state.status = 'idle';
          state.loginStatus = 'success';
          state.loginMsg = action.payload.msg;
          sessionStorage.setItem('accessToken', action.payload.accessToken);
        }
      )
      .addCase(loginNewUser.rejected, (state, action: any) => {
        state.status = 'failed';
        state.loginStatus = 'error';
        state.loginMsg = action.error.message;
      });
  },
});

export const selectAuthSlice = (state: RootState) => state.auth;
export const { resetStatus } = authSlice.actions;

export default authSlice.reducer;
