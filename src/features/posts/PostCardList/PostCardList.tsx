import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import Spinner from '../../../shared/Loading/Loading';
import PostCard from '../PostCard/PostCard';
import { getAllPosts, selectPostsSlice } from '../posts-slice';
import { PostCardListContainer } from './post-card-list-styled';

const PostCardList = () => {
  const dispatch = useAppDispatch();
  const { posts, postGetStatus, postGetMsg } = useAppSelector(selectPostsSlice);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const postsListContent = () => {
    switch (postGetStatus) {
      case 'success':
        return (
          <ul className="posts__list">
            {posts.map((post) => (
              <li key={`${post.user}-${post.game}-${post.date}`}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        );
      case 'error':
        return <p>Error loading posts. ({postGetMsg})</p>;
      default:
        return (
          <>
            <Spinner size={200} color={'tertiary'} />
          </>
        );
    }
  };
  return (
    <>
      <PostCardListContainer>{postsListContent()}</PostCardListContainer>
    </>
  );
};

export default PostCardList;
