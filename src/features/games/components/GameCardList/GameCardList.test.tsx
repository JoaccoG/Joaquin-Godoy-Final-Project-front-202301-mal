import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { server } from '../../../../mocks/server';
import { renderWithProviders } from '../../../../mocks/utils';
import GameCardList from './GameCardList';
import { errorHandlers } from '../../../../mocks/handlers';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a game card list component', () => {
  describe('When the page renders and there are no games to get', () => {
    test('Then the response should be an error', async () => {
      server.use(...errorHandlers);
      renderWithProviders(
        <MemoryRouter>
          <GameCardList />
        </MemoryRouter>
      );

      try {
        await screen.findAllByRole('listitem');
      } catch {}

      const nullPosts = screen.queryByRole('listitem');
      await waitFor(() => {
        expect(nullPosts).toBe(null);
      });

      expect(
        screen.getByText(/Error while fetching games/i)
      ).toBeInTheDocument();
    });
  });

  describe('When the component is rendered', () => {
    test('Then there should be multiple game cards in the document', async () => {
      renderWithProviders(
        <MemoryRouter>
          <GameCardList />
        </MemoryRouter>
      );

      const gamesList = await screen.findByRole('list');

      await waitFor(() => {
        expect(gamesList).toBeInTheDocument();
      });
    });
  });
});
