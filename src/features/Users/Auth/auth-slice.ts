import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { registerUser } from './auth-api';
import { User } from '../../../models/user-model';

export type UserCredentials = Pick<User, 'email' | 'password'>;

export interface AuthResponse {
  msg: string;
}

interface AuthState {
  status: 'idle' | 'loading' | 'failed';
  authStatus: 'idle' | 'success' | 'error';
  authMsg: string;
}

const initialState: AuthState = {
  status: 'idle',
  authStatus: 'idle',
  authMsg: '',
};

export const registerNewUser = createAsyncThunk(
  'authSlice/registerNewUser',
  async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());

    const apiRes = await registerUser(newUser as UserCredentials);
    const data: AuthResponse = await apiRes.json();

    if (!apiRes.ok) {
      throw new Error(data.msg);
    }

    return data.msg;
  }
);

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerNewUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        registerNewUser.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.status = 'idle';
          state.authStatus = 'success';
          state.authMsg = action.payload;
        }
      )
      .addCase(registerNewUser.rejected, (state, action: any) => {
        state.status = 'failed';
        state.authMsg = action.error.message;
        state.authStatus = 'error';
      });
  },
});

export const selectAuthSlice = (state: RootState) => state.auth;

export default authSlice.reducer;
