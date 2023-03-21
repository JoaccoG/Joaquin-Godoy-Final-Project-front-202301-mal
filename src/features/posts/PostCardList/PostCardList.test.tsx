import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { errorHandlers } from '../../../mocks/handlers';
import { server } from '../../../mocks/server';
import PostCardList from './PostCardList';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a posts card list component', () => {
  describe('When the page renders and there are no posts to get', () => {
    server.use(...errorHandlers);
    test('Then the response should be an error', async () => {
      render(
        <Provider store={store}>
          <PostCardList />
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
    test('Then there should be listitems in the document', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <PostCardList />
          </MemoryRouter>
        </Provider>
      );

      const cardsList = await screen.findAllByRole('listitem');

      await waitFor(() => {
        expect(cardsList[0]).toBeInTheDocument();
      });
    });
  });
});
