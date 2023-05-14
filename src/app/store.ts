import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
import authReducer from '../features/user/auth/auth-slice';
import postsReducer from '../features/posts/posts-slice';
import usersSlice from '../features/user/users/users-slice';
import gamesSlice from '../features/games/games-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    users: usersSlice,
    games: gamesSlice,
  },
});

const rootReducers = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  users: usersSlice,
  games: gamesSlice,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducers,
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
