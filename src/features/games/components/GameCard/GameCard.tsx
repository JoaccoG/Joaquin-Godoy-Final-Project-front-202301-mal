import { FC } from 'react';
import { Game } from '../../../../models/game-model';
import { GameCardContainer } from './game-card-styled';

interface GameCardProps {
  game: Pick<Game, '_id' | 'name' | 'banner'>;
}

const GameCard: FC<GameCardProps> = ({ game }) => {
  return (
    <GameCardContainer banner={game.banner}>
      <section className="game-card__content">
        <h3 className="game-card-content__title">{game.name}</h3>
        <button className="game-card-content__btn">View game</button>
      </section>
    </GameCardContainer>
  );
};

export default GameCard;
