import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../../app/store';
import LoginForm from './LoginForm';
import { server } from '../../../../../mocks/server';
import userEvent from '@testing-library/user-event';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a login form component', () => {
  test('When the component loads, then it should be a welcome message', async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    expect(
      await screen.findByText('To be able to use the app, you need to log in.')
    ).toBeInTheDocument();
  });

  test('When a user tries to login with a valid email and password, then he should receive his access token', async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'email@test.com'
    );
    await userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(
        screen.getByText(
          'Successfully logged in! You will now be redirected...'
        )
      ).toBeInTheDocument();
    });
  });

  test('When there is an error while logging in, then the user should receive an error message as feedback', async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'email2@test.com'
    );
    await userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('Error while logging in')).toBeInTheDocument();
    });
  });
});
