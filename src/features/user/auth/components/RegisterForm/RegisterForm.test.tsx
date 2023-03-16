import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../../app/store';
import RegisterForm from './RegisterForm';
import { server } from '../../../../../mocks/server';
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
      await screen.findByText('Create an account and start posting.')
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
        screen.getByText(
          'You have successfully registered! You may now log in...'
        )
      ).toBeInTheDocument();
    });
  });

  test('When there is an error while registering, then the user should receive an error message as feedback', async () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>
    );

    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'email2@test.com'
    );
    await userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('Error while registering')).toBeInTheDocument();
    });
  });
});
