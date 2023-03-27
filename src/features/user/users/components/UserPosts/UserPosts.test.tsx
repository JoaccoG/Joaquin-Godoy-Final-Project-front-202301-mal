import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { errorHandlers } from '../../../../../mocks/handlers';
import { server } from '../../../../../mocks/server';
import { renderWithProviders } from '../../../../../mocks/utils';
import UserPosts from './UserPosts';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a user posts component', () => {
  describe('When it is rendered', () => {
    test('Then there should be posts in the document', async () => {
      renderWithProviders(
        <MemoryRouter>
          <UserPosts userId={'1234'} />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(screen.getByText(/user-1/i)).toBeInTheDocument();
      });
    });

    test('But there is an error while fetching posts data, then an error feedback message should be shown', async () => {
      server.use(...errorHandlers);
      renderWithProviders(
        <MemoryRouter>
          <UserPosts userId={'1234'} />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(screen.getByText(/error/i)).toBeInTheDocument();
      });
    });
  });
});
