import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mockedGames } from '../../../../mocks/data';
import { server } from '../../../../mocks/server';
import { renderWithProviders } from '../../../../mocks/utils';
import GameCard from './GameCard';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => {
  sessionStorage.clear();
  server.close();
});

describe('Given a game card component', () => {
  describe('When the component is rendered', () => {
    test('Then there should be an article in the document', () => {
      renderWithProviders(
        <MemoryRouter>
          <GameCard game={mockedGames[0]} />
        </MemoryRouter>
      );

      expect(screen.getByRole('article')).toBeInTheDocument();
    });
  });
});
