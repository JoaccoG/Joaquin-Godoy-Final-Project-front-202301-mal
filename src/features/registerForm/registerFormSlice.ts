import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { NewUser } from '../../models/user-model';
import { registerUser } from './registerFormApi';

export interface RegisterFormState {
  status: 'idle' | 'loading' | 'failed';
  registerStatus: 'idle' | 'success' | 'error';
}

const initialState: RegisterFormState = {
  status: 'idle',
  registerStatus: 'idle',
};

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
        (state, action: PayloadAction<'idle' | 'success' | 'error'>) => {
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

export const registerNewUser = createAsyncThunk(
  'registerForm/registerNewUser',
  async (form: HTMLFormElement) => {
    if (form.password.value !== form.repeatPassword.value) {
      return 'error';
    }
    const newUser: NewUser = {
      email: form.email.value,
      password: form.password.value,
    };
    const apiRes = await registerUser(newUser);
    if (apiRes === 201) {
      return 'success';
    }
    return 'error';
  }
);

export const selectRegisterForm = (state: RootState) => state.registerForm;

export default registerFormSlice.reducer;
