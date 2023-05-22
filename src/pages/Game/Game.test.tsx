import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../mocks/utils';
import Game from './Game';

describe('Given a game details page', () => {
  describe('When the page renders', () => {
    test('Then there should be an article in the document', async () => {
      renderWithProviders(<Game />);

      await waitFor(() => {
        expect(screen.getByRole('article')).toBeInTheDocument();
      });
    });
  });
});
