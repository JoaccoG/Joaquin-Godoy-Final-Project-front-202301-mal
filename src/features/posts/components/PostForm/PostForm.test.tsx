import { render, screen, waitFor } from '@testing-library/react';
import { server } from '../../../../mocks/server';
import { Provider } from 'react-redux';
import { store } from '../../../../app/store';
import PostForm from './PostForm';
import userEvent from '@testing-library/user-event';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a posts form component', () => {
  describe('When the component is render', () => {
    test('Then there should be a form in the document', () => {
      render(
        <Provider store={store}>
          <PostForm games={['game-1', 'game-2']} />
        </Provider>
      );
      expect(screen.getByTestId('posts-form')).toBeInTheDocument();
    });
  });

  describe('When the form is sent', () => {
    afterAll(() => {
      jest.resetAllMocks();
      jest.clearAllMocks();
    });

    test('With valid data, then it should show a success feedback message', async () => {
      /* FIX: Not being able to mock multipart/form-data api requests with MSW. Mocked the fetch return value instead */
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          msg: 'Your post has been created!',
        }),
      });
      render(
        <Provider store={store}>
          <PostForm games={['game-1', 'game-2']} />
        </Provider>
      );

      userEvent.selectOptions(screen.getByTestId('game'), 'game-1');
      userEvent.selectOptions(screen.getByTestId('rating'), '3');
      userEvent.type(screen.getByTestId('review'), 'Test review');
      userEvent.upload(screen.getByTestId('photo'), new File([''], 'test.png'));
      userEvent.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(
          screen.getByText('Your post has been created!')
        ).toBeInTheDocument();
      });
    });

    test('With wrong data, then it should be an error feedback message', async () => {
      /* FIX: Not being able to mock multipart/form-data api requests with MSW. Mocked the fetch return value instead */
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn().mockResolvedValue({
          msg: 'There was an error during your request',
        }),
      });
      render(
        <Provider store={store}>
          <PostForm games={['game-1', 'game-2']} />
        </Provider>
      );

      userEvent.selectOptions(screen.getByTestId('game'), 'game-1');
      userEvent.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(
          screen.getByText(
            'Error during post creation, please try again later. (There was an error during your request)'
          )
        ).toBeInTheDocument();
      });
    });
  });
});
