import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { errorHandlers } from '../../mocks/handlers';
import { server } from '../../mocks/server';
import Home from './Home';

describe('Given a home page', () => {
  describe('When the page renders', () => {
    server.use(...errorHandlers);
    test('Then there should be an article in the document', async () => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
      );

      expect(screen.getByRole('article')).toBeInTheDocument();
    });
  });
});
