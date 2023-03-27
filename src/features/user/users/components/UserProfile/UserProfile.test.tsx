import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { errorHandlers } from '../../../../../mocks/handlers';
import { server } from '../../../../../mocks/server';
import { renderWithProviders } from '../../../../../mocks/utils';
import UserProfile from './UserProfile';

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  sessionStorage.clear();
});
afterAll(() => server.close());

describe('Given a user profile component', () => {
  describe('When rendering the component', () => {
    test('Then there should be user data displayed', async () => {
      renderWithProviders(
        <MemoryRouter>
          <UserProfile userId={'1234'} />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(screen.getByText(/favourite games/i)).toBeInTheDocument();
      });
    });

    test('If the user is loading his own profile, he should be able to edit it', async () => {
      sessionStorage.setItem('user', '1234');
      renderWithProviders(
        <MemoryRouter>
          <UserProfile userId={'1234'} />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(screen.getByText(/edit profile/i)).toBeInTheDocument();
      });
    });

    test('But there is an error while fetching data', async () => {
      server.use(...errorHandlers);
      renderWithProviders(
        <MemoryRouter>
          <UserProfile userId={'1234'} />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(screen.getByText(/error/i)).toBeInTheDocument();
      });
    });
  });
});
