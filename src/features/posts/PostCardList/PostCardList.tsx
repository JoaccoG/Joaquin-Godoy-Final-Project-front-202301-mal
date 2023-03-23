import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import Spinner from '../../../shared/Loading/Loading';
import PostCard from '../PostCard/PostCard';
import { getAllPosts, selectPostsSlice } from '../posts-slice';
import { PostCardListContainer } from './post-card-list-styled';

const PostCardList = () => {
  const dispatch = useAppDispatch();
  const { posts, postsCount, postGetStatus, postGetMsg } =
    useAppSelector(selectPostsSlice);

  useEffect(() => {
    dispatch(getAllPosts({ offset: 0, limit: 4 }));
  }, [dispatch]);

  const postsListContent = () => {
    switch (postGetStatus) {
      case 'success':
        return (
          <InfiniteScroll
            next={() =>
              dispatch(getAllPosts({ offset: posts.length, limit: 4 }))
            }
            dataLength={posts.length}
            hasMore={posts.length < postsCount}
            scrollThreshold={0.9}
            loader={<Spinner size={64} color={'tertiary'} />}
            endMessage={
              <div className="posts-list__end">
                <p>There's not much more to see here...</p>
              </div>
            }
          >
            <ul className="posts-list__list">
              {posts.map((post) => (
                <li key={`post-${post._id}`}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          </InfiniteScroll>
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
