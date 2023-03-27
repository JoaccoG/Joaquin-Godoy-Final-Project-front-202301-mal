import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { errorHandlers } from '../../../../mocks/handlers';
import { server } from '../../../../mocks/server';
import { renderWithProviders } from '../../../../mocks/utils';
import PostCardList from './PostCardList';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a posts card list component', () => {
  describe('When the page renders and there are no posts to get', () => {
    test('Then the response should be an error', async () => {
      server.use(...errorHandlers);
      renderWithProviders(
        <MemoryRouter>
          <PostCardList />
        </MemoryRouter>
      );

      try {
        await screen.findAllByRole('listitem');
      } catch {}

      const nullPosts = screen.queryByRole('listitem');
      await waitFor(() => {
        expect(nullPosts).toBe(null);
      });

      expect(screen.getByText(/Error loading posts/i)).toBeInTheDocument();
    });
  });

  describe('When the page renders with the right data', () => {
    test('Then there should be listitems in the document', async () => {
      renderWithProviders(
        <MemoryRouter>
          <PostCardList />
        </MemoryRouter>
      );

      const cardsList = await screen.findAllByRole('listitem');

      await waitFor(() => {
        expect(cardsList[0]).toBeInTheDocument();
      });
    });
  });
});
