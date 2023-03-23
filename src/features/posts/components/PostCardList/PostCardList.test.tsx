import { fireEvent, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { errorHandlers } from '../../../mocks/handlers';
import { server } from '../../../mocks/server';
import { renderWithProviders } from '../../../mocks/utils';
import PostCardList from './PostCardList';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a posts card list component', () => {
  describe('When the page renders and there are no posts to get', () => {
    server.use(...errorHandlers);
    test('Then the response should be an error', async () => {
      renderWithProviders(
        <MemoryRouter>
          <PostCardList />
        </MemoryRouter>
      );

      try {
        await screen.findAllByRole('listitem');
      } catch {}

      await waitFor(() => {
        expect(screen.queryByRole('listitem')).toBe(null);
      });
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

  describe('When the user scrolls to see more posts', () => {
    test('Then more posts should load', async () => {
      renderWithProviders(
        <MemoryRouter>
          <PostCardList />
        </MemoryRouter>
      );

      expect(screen.getByTestId('spinner')).toBeInTheDocument();
      // expect(await screen.findAllByRole('listitem')).toHaveLength(4);

      await fireEvent.scroll(window, { EventTarget: { scrollY: 1000 } });
      await waitFor(() => {
        expect(screen.getAllByRole('listitem')).toHaveLength(12);
      });
    });
  });
});
