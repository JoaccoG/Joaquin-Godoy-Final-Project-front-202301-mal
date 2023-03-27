import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import Spinner from '../../../../../shared/Loading/Loading';
import { FC } from 'react';
import { getPostsByUser, selectUserSlice } from '../../users-slice';
import PostCard from '../../../../posts/components/PostCard/PostCard';
import { UserPostsContainer } from './user-posts-styled';
import { Post } from '../../../../../models/post-model';

interface UserPostsProps {
  userId: string;
  userPosts: Post[];
}

const UserPosts: FC<UserPostsProps> = ({ userId, userPosts }) => {
  const dispatch = useAppDispatch();
  const { userPostsCount } = useAppSelector(selectUserSlice);

  // Due to how jsdom works, there is no current way to cover the infinite scroll "next" function with Jest.
  // Cypress E2E test must be written to test and cover it.
  /* istanbul ignore next */
  const handleScroll = () => {
    dispatch(
      getPostsByUser({ userId: userId, offset: userPosts.length, limit: 4 })
    );
  };

  return (
    <>
      <UserPostsContainer>
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
      </UserPostsContainer>
    </>
  );
};

export default UserPosts;
