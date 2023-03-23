import { fireEvent, screen, waitFor } from '@testing-library/react';
import { server } from '../../../../mocks/server';
import PostForm from './PostForm';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../../mocks/utils';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a posts form component', () => {
  describe('When the component is render', () => {
    test('Then there should be a form in the document', () => {
      renderWithProviders(<PostForm games={['game-1', 'game-2']} />);
      expect(screen.getByTestId('posts-form')).toBeInTheDocument();
    });

    test('And the user uploads a file, he should see the name of the file he is trying to upload', async () => {
      renderWithProviders(<PostForm games={['game-1', 'game-2']} />);
      expect(screen.queryByText(/test/i)).not.toBeInTheDocument();

      const blob = new Blob([''], { type: 'image/png' });
      const file = new File([blob], 'test.png', { type: 'image/png' });
      await fireEvent.change(screen.getByTestId('photo'), {
        target: {
          files: [file, 'test.png'],
        },
      });
      await waitFor(() => {
        expect(screen.getByText(/test/i)).toBeInTheDocument();
      });
    });
  });

  describe('When the form is sent', () => {
    afterAll(() => {
      jest.resetAllMocks();
      jest.clearAllMocks();
    });

    test('With valid data, then it should show a success feedback message', async () => {
      /* FIXME: Not being able to mock multipart/form-data api requests with MSW. Mocked the fetch return value instead */
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          msg: 'Your post has been created!',
        }),
      });
      renderWithProviders(<PostForm games={['game-1', 'game-2']} />);

      userEvent.selectOptions(screen.getByTestId('game'), 'game-1');
      userEvent.selectOptions(screen.getByTestId('rating'), '3');
      userEvent.type(screen.getByTestId('review'), 'Test review');
      userEvent.upload(screen.getByTestId('photo'), new File([''], 'test.png'));
      userEvent.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByText(/created/i)).toBeInTheDocument();
      });
    });

    test('With wrong data, then it should be an error feedback message', async () => {
      /* FIXME: Not being able to mock multipart/form-data api requests with MSW. Mocked the fetch return value instead */
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn().mockResolvedValue({
          msg: 'There was an error during your request',
        }),
      });
      renderWithProviders(<PostForm games={['game-1', 'game-2']} />);

      userEvent.selectOptions(screen.getByTestId('game'), 'game-1');
      userEvent.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByText(/error/i)).toBeInTheDocument();
      });
    });
  });
});
