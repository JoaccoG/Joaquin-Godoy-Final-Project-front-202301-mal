import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { UserCredentials } from '../../models/user-model';
import { registerUser } from './registerFormApi';

export type RegisterStatus = 'idle' | 'success' | 'error' | 'error409';

interface RegisterFormState {
  status: 'idle' | 'loading' | 'failed';
  registerStatus: RegisterStatus;
}

const initialState: RegisterFormState = {
  status: 'idle',
  registerStatus: 'idle',
};

export const registerNewUser = createAsyncThunk(
  'registerForm/registerNewUser',
  async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());

    const apiRes = await registerUser(newUser as UserCredentials);

    switch (apiRes.status) {
      case 201:
        return 'success';
      case 409:
        return 'error409';
      default:
        throw new Error('Error registering new user.');
    }
  }
);

export const registerFormSlice = createSlice({
  name: 'registerForm',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerNewUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        registerNewUser.fulfilled,
        (state, action: PayloadAction<RegisterStatus>) => {
          state.status = 'idle';
          state.registerStatus = action.payload;
        }
      )
      .addCase(registerNewUser.rejected, (state) => {
        state.status = 'failed';
        state.registerStatus = 'error';
      });
  },
});

export const selectRegisterForm = (state: RootState) => state.registerForm;

export default registerFormSlice.reducer;
