import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getOneGame, resetGame, selectGamesSlice } from '../../games-slice';
import Loading from '../../../../shared/Loading/Loading';
import { GameDetailsContainer } from './game-details-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import Title from '../../../../shared/Title/Title';

interface GameDetailsProps {
  gameId: string;
}

const GameDetails: FC<GameDetailsProps> = ({ gameId }) => {
  const dispatch = useAppDispatch();
  const { game, getGameStatus, getGameMsg } = useAppSelector(selectGamesSlice);

  useEffect(() => {
    dispatch(resetGame());
    dispatch(getOneGame(gameId));
  }, [dispatch, gameId]);

  const handleDateFormat = (date: Date) => {
    // Must create a new Date object with the received one to prevent possible missformed dates from the received data
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleDataLoading = () => {
    switch (getGameStatus) {
      case 'success':
        return (
          <GameDetailsContainer>
            <div className="game__hero">
              <Link to={'../games'}>
                <FontAwesomeIcon
                  className="game__hero--back"
                  icon={solid('circle-chevron-left')}
                />
              </Link>
              <div className="game__hero--overlay"></div>
              <img
                className="game__hero--banner"
                src={game.banner}
                alt={game.name}
              />
            </div>
            <Title
              text={`${game.name}`}
              size={'small'}
              color={'primary'}
              align={'left'}
            ></Title>
            <section className="game__tags">
              <ul className="game-tags__list">
                {game.tags.map((tag, i) => (
                  <li className="game-tags__list--item" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </section>
            <section className="game__description">
              <p>{game.description}</p>
            </section>
            <section className="game__data">
              <ul className="game-data__list">
                <li className="game-data-list__item">
                  <FontAwesomeIcon
                    className="game-data-list__item--icon"
                    icon={solid('star')}
                  />
                  <p className="game-data-list__item--content">
                    {game.rating} / 5
                  </p>
                </li>
                <li className="game-data-list__item">
                  <FontAwesomeIcon
                    className="game-data-list__item--icon"
                    icon={solid('gamepad')}
                  />
                  <p className="game-data-list__item--content">{game.mode}</p>
                </li>
                <li className="game-data-list__item">
                  <FontAwesomeIcon
                    className="game-data-list__item--icon"
                    icon={regular('building')}
                  />
                  <p className="game-data-list__item--content">{game.studio}</p>
                </li>
                <li className="game-data-list__item">
                  <FontAwesomeIcon
                    className="game-data-list__item--icon"
                    icon={regular('calendar')}
                  />
                  <p className="game-data-list__item--content">
                    {handleDateFormat(game.launch)}
                  </p>
                </li>
              </ul>
            </section>
          </GameDetailsContainer>
        );
      case 'error':
        return <p>Error while getting game data ({getGameMsg})</p>;
      case 'loading':
        return <Loading size={200} color={'tertiary'}></Loading>;
    }
  };

  return <>{handleDataLoading()}</>;
};

export default GameDetails;
