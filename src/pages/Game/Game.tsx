import { useParams } from 'react-router-dom';
import GameDetails from '../../features/games/components/GameDetails/GameDetails';
import { GameContainer } from './game-styled';

const Game = () => {
  const { id } = useParams();
  const gameId = id ?? '';

  return (
    <GameContainer>
      <GameDetails gameId={gameId} />
    </GameContainer>
  );
};

export default Game;
