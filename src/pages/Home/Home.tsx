import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { HomeContainer } from './home-styled';
import Title from '../../shared/Title/Title';
import PostCard from '../../features/posts/PostCard/PostCard';
import PostForm from '../../features/posts/PostForm/PostForm';
import {
  getAllPosts,
  selectPostsSlice,
} from '../../features/posts/posts-slice';

const Home = () => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector(selectPostsSlice);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <HomeContainer>
      <Title text={'Welcome home!'} size={'small'} color={'tertiary'} />
      <section className="home__post-form">
        {/*
        ------------------------------------------------------
        NOTE: Pasar games acá cuando haga el slice de games...
        ------------------------------------------------------
        */}
        <PostForm games={['game1', 'Game 2', 'Game 3']} />
      </section>
      <section className="home__posts">
        <ul className="posts__list">
          {posts.map((post) => (
            <li key={`${post.user.username}-${post.game.name}-${post.date}`}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </section>
    </HomeContainer>
  );
};

export default Home;
