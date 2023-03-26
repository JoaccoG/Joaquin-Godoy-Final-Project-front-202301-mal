import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from '../app/store';
import { UserProfile } from '../models/user-model';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      auth: {
        status: 'idle',
        loginMsg: '',
        loginStatus: 'idle',
        registerMsg: '',
        registerStatus: 'idle',
      },
      posts: {
        status: 'idle',
        posts: [],
        postsCount: 0,
        postCreationStatus: 'idle',
        postCreationMsg: '',
        postGetStatus: 'idle',
        postGetMsg: '',
        filePreview: '',
      },
      users: {
        status: 'idle',
        user: {} as UserProfile,
        getOneUserStatus: 'idle',
        userPosts: [],
        userPostsCount: 0,
      },
    },
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
