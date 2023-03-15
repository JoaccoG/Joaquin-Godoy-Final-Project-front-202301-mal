import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import RegisterForm from './registerForm';
import { server } from '../../mocks/server';
import userEvent from '@testing-library/user-event';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a register form component', () => {
  test('When the component loads, then it should be a welcome message', async () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    );

    expect(
      await screen.findByText(
        'To be able to use the app, you need to create an account.'
      )
    ).toBeInTheDocument();
  });

  test('When a user tries to register with a valid email and password, then he should be registered', async () => {
    render(
      <Provider store={store}>
        <RegisterForm />
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
        screen.getByText('You have successfully registered!')
      ).toBeInTheDocument();
    });
  });

  test('When a user tries to register with an email that is already registered, then he should receive an error message as feedback', async () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    );

    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'alreadyRegisteredEmail@test.com'
    );
    await userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(
        screen.getByText('That email is already registered.')
      ).toBeInTheDocument();
    });
  });

  test('When a user tries to register with invalid email or password, then he should receive an error message as feedback', async () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    );

    await userEvent.type(screen.getByPlaceholderText('Email'), 'invalidEmail');
    await userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(
        screen.getByText(
          'There was an error during the registration, please try again later.'
        )
      ).toBeInTheDocument();
    });
  });

  test('When a user tries to register and the promise is rejected, then he should receive an error message as feedback', async () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    );

    await userEvent.type(screen.getByPlaceholderText('Email'), 'email');
    await userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(
        screen.getByText(
          'There was an error during the registration, please try again later.'
        )
      ).toBeInTheDocument();
    });
  });
});
