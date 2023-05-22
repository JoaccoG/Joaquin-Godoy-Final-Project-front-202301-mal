import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { server } from '../../../../mocks/server';
import { renderWithProviders } from '../../../../mocks/utils';
import { mockedGames } from '../../../../mocks/data';
import GameDetails from './GameDetails';
import { errorHandlers } from '../../../../mocks/handlers';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a game card component', () => {
  describe('When there is an error when the component is rendering', () => {
    test('Then there should be a feedback message', async () => {
      server.use(...errorHandlers);
      renderWithProviders(
        <MemoryRouter>
          <GameDetails gameId={mockedGames[0]._id} />
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(
          screen.getByText(/Error while fetching game data/i)
        ).toBeInTheDocument();
      });
    });
  });
  describe('When the component is rendered', () => {
    test('Then there should be an article in the document', async () => {
      renderWithProviders(
        <MemoryRouter>
          <GameDetails gameId={mockedGames[0]._id} />
        </MemoryRouter>
      );

      await waitFor(async () => {
        await expect(screen.getByRole('article')).toBeInTheDocument();
      });
    });
  });
});
