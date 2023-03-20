import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { mockedPosts } from '../../../mocks/data';
import PostCard from './PostCard';

describe('Given a post card component', () => {
  test('When the component is rendered, then there should be an article in the document', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PostCard post={mockedPosts[0]} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole('article')).toBeInTheDocument();
  });
  test('When the post passed as prop has a photo, then there should be 3 images on the document', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PostCard post={mockedPosts[1]} />
        </MemoryRouter>
      </Provider>
    );

    const imgElements = screen.getAllByRole('img');

    expect(imgElements).toHaveLength(3);
    expect(imgElements[2]).toBeInTheDocument();
  });
});
