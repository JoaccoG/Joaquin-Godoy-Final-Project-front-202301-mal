import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mockedPosts } from '../../../../../mocks/data';
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
          <UserPosts userId={'1234'} userPosts={mockedPosts} />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(screen.getByText(/user-1/i)).toBeInTheDocument();
      });
    });
  });
});
