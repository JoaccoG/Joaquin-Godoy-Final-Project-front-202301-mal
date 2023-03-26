import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { mockedPosts } from '../../../../mocks/data';
import { errorHandlers } from '../../../../mocks/handlers';
import { server } from '../../../../mocks/server';
import { renderWithProviders } from '../../../../mocks/utils';
import { RequestStatus, Status } from '../../../../models/models';
import { UserProfile } from '../../../../models/user-model';
import PostCard from './PostCard';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => {
  sessionStorage.clear();
  server.close();
});

describe('Given a post card component', () => {
  test('When the component is rendered, then there should be an article in the document', () => {
    renderWithProviders(
      <MemoryRouter>
        <PostCard post={mockedPosts[0]} />
      </MemoryRouter>
    );

    expect(screen.getByRole('article')).toBeInTheDocument();
  });
  test('When the post passed as prop has a photo, then there should be 3 images on the document', () => {
    renderWithProviders(
      <MemoryRouter>
        <PostCard post={mockedPosts[1]} />
      </MemoryRouter>
    );

    const imgElements = screen.getAllByRole('img');

    expect(imgElements).toHaveLength(2);
    expect(imgElements[0]).toBeInTheDocument();
  });

  test('When the user is the owner of a post, he should be able to delete it', async () => {
    sessionStorage.setItem('user', 'user-1');
    renderWithProviders(
      <MemoryRouter>
        <PostCard post={mockedPosts[0]} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('delete-btn')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('delete-btn'));

    await waitFor(() => {
      expect(screen.getByText('Game 1')).toBeInTheDocument();
    });
  });

  test('When the user is the owner of a post but there is a problem in the api request, he should not be able to delete it', async () => {
    server.use(...errorHandlers);
    sessionStorage.setItem('user', 'user-2');
    const preloadedState = {
      auth: {
        status: 'idle' as Status,
        loginMsg: '',
        loginStatus: 'idle' as RequestStatus,
        registerMsg: '',
        registerStatus: 'idle' as RequestStatus,
      },
      posts: {
        status: 'idle' as Status,
        posts: mockedPosts,
        postsCount: mockedPosts.length,
        postCreationStatus: 'idle' as RequestStatus,
        postCreationMsg: '',
        postGetStatus: 'idle' as RequestStatus,
        postGetMsg: '',
        filePreview: '',
      },
      users: {
        status: 'idle' as Status,
        user: {} as UserProfile,
        getOneUserStatus: 'idle' as RequestStatus,
        userPosts: [],
        userPostsCount: 0,
        getUserPostsStatus: 'idle' as RequestStatus,
      },
    };

    renderWithProviders(
      <MemoryRouter>
        <PostCard post={mockedPosts[1]} />
      </MemoryRouter>,
      { preloadedState }
    );

    await userEvent.click(screen.getByTestId('delete-btn'));

    await waitFor(async () => {
      expect(screen.getByText('Game 2')).toBeInTheDocument();
    });
  });
});
