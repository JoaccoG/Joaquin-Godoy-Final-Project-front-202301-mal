import { fireEvent, screen, waitFor } from '@testing-library/react';
import RegisterForm from './RegisterForm';
import { server } from '../../../../../mocks/server';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../../../mocks/utils';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a register form component', () => {
  test('When the component loads, then it should be a welcome message', async () => {
    renderWithProviders(<RegisterForm />);

    expect(await screen.findByText(/Welcome/i)).toBeInTheDocument();
  });

  test('When a user tries to register with a valid email and password, then he should be registered', async () => {
    renderWithProviders(<RegisterForm />);

    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'email@test.com'
    );
    await userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText(/successfully registered/i)).toBeInTheDocument();
    });
  });

  test('When there is an error while registering, then the user should receive an error message as feedback', async () => {
    renderWithProviders(<RegisterForm />);

    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'email2@test.com'
    );
    await userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText(/Error while registering/i)).toBeInTheDocument();
    });
  });
});
