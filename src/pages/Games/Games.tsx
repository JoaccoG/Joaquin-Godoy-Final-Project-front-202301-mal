import Title from '../../shared/Title/Title';
import GameCardList from '../../features/games/components/GameCardList/GameCardList';
import { GamesContainer } from './games-styled';

const Games = () => {
  return (
    <GamesContainer>
      <Title text={'Games'} size={'large'} color={'tertiary'} />
      <GameCardList />
    </GamesContainer>
  );
};

export default Games;
