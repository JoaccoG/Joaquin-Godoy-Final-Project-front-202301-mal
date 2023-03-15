import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import registerFormReducer from '../features/registerForm/registerFormSlice';

export const store = configureStore({
  reducer: {
    registerForm: registerFormReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
