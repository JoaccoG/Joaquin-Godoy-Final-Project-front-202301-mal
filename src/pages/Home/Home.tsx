import { HomeContainer } from './home-styled';
import Title from '../../shared/Title/Title';
import PostForm from '../../features/posts/PostForm/PostForm';
import PostCardList from '../../features/posts/PostCardList/PostCardList';

const gamesList = [
  'Ori And The Will Of The Wisps',
  'Terraria',
  'Call Of Duty Warzone',
  'Satisfactory',
  'The Witcher 3',
  'It Takes Two',
  'Assassins Creed Valhalla',
  'Age Of Empires IV',
  'Back 4 Blood',
  'A Plague Tale Requiem',
  'Detroit Become Human',
  'Valheim',
  'Bioshock Infinite',
  'Farcry 6',
  'Need For Speed Heat',
  'Serious Sam 4',
  'The Long Dark',
  'Red Dead Redemption 2',
  'Stardew Valley',
  'New World',
];

const Home = () => {
  return (
    <HomeContainer>
      <Title text={'Home page'} size={'small'} color={'tertiary'} />
      <section className="home__post-form">
        <PostForm games={gamesList} />
      </section>
      <section className="home__posts">
        <PostCardList />
      </section>
    </HomeContainer>
  );
};

export default Home;
