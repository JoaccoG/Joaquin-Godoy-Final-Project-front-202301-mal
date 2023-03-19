import PostForm from '../../features/posts/PostForm/PostForm';
import Title from '../../shared/Title/Title';
import { HomeContainer } from './home-styled';

const Home = () => {
  return (
    <HomeContainer>
      <Title text={'Create a new post'} size={'small'} color={'tertiary'} />
      <article className="home__post-form">
        <PostForm games={['game1', 'Game 2', 'Game 3']} />
      </article>
    </HomeContainer>
  );
};

export default Home;
