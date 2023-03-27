import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import Spinner from '../../../../../shared/Loading/Loading';
import { useEffect } from 'react';
import { getPostsByUser, selectUserSlice } from '../../users-slice';
import { useParams } from 'react-router-dom';
import PostCard from '../../../../posts/components/PostCard/PostCard';
import { UserPostsContainer } from './user-posts-styled';

const UserPosts = () => {
  const dispatch = useAppDispatch();
  const { userPosts, userPostsCount, getUserPostsStatus } =
    useAppSelector(selectUserSlice);
  const { id } = useParams();
  const userId = id ?? '';

  useEffect(() => {
    dispatch(getPostsByUser({ userId: userId, offset: 0, limit: 4 }));
  }, [dispatch, userId]);

  // Due to how jsdom works, there is no current way to cover the infinite scroll "next" function with Jest.
  // Cypress E2E test must be written to test and cover it.
  /* istanbul ignore next */
  const handleScroll = () => {
    dispatch(
      getPostsByUser({ userId: userId, offset: userPosts.length, limit: 4 })
    );
  };

  const postsListContent = () => {
    switch (getUserPostsStatus) {
      case 'success':
        return (
          <InfiniteScroll
            next={handleScroll}
            dataLength={userPosts.length}
            hasMore={userPosts.length < userPostsCount}
            scrollThreshold={0.9}
            loader={<Spinner size={64} color={'tertiary'} />}
            endMessage={
              <div className="posts-list__end">
                <p>There's not much more to see here...</p>
                <p>¡You've seen it all!</p>
              </div>
            }
          >
            <ul className="posts-list__list">
              {userPosts.map((post) => (
                <li key={`post-${post._id}`}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          </InfiniteScroll>
        );
      case 'error':
        return <p>Error loading user posts ({getUserPostsStatus}).</p>;
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
      <UserPostsContainer>{postsListContent()}</UserPostsContainer>
    </>
  );
};

export default UserPosts;
