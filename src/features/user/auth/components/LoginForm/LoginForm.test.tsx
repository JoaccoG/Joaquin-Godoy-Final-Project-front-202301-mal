import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../../app/store';
import LoginForm from './LoginForm';
import { server } from '../../../../../mocks/server';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => {
  server.close();
  sessionStorage.clear();
  jest.clearAllMocks();
  jest.resetAllMocks();
});

describe('Given a login form component', () => {
  test('When the component loads, then it should be a welcome message', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );

    expect(await screen.findByText(/Welcome back/i)).toBeInTheDocument();
  });

  test('When a user tries to login with a valid email and password, then he should receive his access token', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );

    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'email@test.com'
    );
    await userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText(/Successfully logged in/i)).toBeInTheDocument();
    });
    expect(sessionStorage.getItem('accessToken')).toBeDefined();
  });

  test('When there is an error while logging in, then the user should receive an error message as feedback', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );

    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'email2@test.com'
    );
    await userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText(/Error while logging in/i)).toBeInTheDocument();
    });
  });
});
