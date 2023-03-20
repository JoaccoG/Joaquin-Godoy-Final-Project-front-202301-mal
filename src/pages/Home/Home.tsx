import PostForm from '../../features/posts/PostForm/PostForm';
import Title from '../../shared/Title/Title';
import { HomeContainer } from './home-styled';

const Home = () => {
  return (
    <HomeContainer>
      <Title
        text={'Watch other players reviews'}
        size={'small'}
        color={'tertiary'}
      />
      <article className="home__post-form">
        <PostForm games={['game1', 'Game 2', 'Game 3']} />
      </article>
    </HomeContainer>
  );
};

export default Home;
