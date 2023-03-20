import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/user/auth/auth-slice';
import postsReducer from '../features/posts/posts-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
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
