import { screen } from '@testing-library/react';
import { errorHandlers } from '../../mocks/handlers';
import { server } from '../../mocks/server';
import { renderWithProviders } from '../../mocks/utils';
import Profile from './Profile';

describe('Given a home page', () => {
  describe('When the page renders', () => {
    server.use(...errorHandlers);
    test('Then there should be an article in the document', async () => {
      renderWithProviders(<Profile />);

      expect(screen.getByRole('article')).toBeInTheDocument();
    });
  });
});
