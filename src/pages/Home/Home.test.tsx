import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import { errorHandlers } from '../../mocks/handlers';
import { server } from '../../mocks/server';
import Home from './Home';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a home page', () => {
  describe('When the page renders and there are no posts to get', () => {
    server.use(...errorHandlers);
    test('When the page renders but there are an error while getting posts, then the response should be an error', async () => {
      render(
        <Provider store={store}>
          <Home />
        </Provider>
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
    test('When the page renders and there are posts to get, then there should be listitems in the document', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Home />
          </MemoryRouter>
        </Provider>
      );

      const listElements = await screen.findAllByRole('listitem');

      await waitFor(() => {
        expect(listElements[0]).toBeInTheDocument();
      });
    });
  });
});
