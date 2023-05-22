import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../mocks/utils';
import Games from './Games';

describe('Given a game details page', () => {
  describe('When the page renders', () => {
    test('Then there should be an article in the document', async () => {
      renderWithProviders(<Games />);

      await waitFor(() => {
        expect(screen.getByRole('article')).toBeInTheDocument();
      });
    });
  });
});
