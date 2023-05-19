import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getAllGames, resetGames, selectGamesSlice } from '../../games-slice';
import { GameCardListContainer } from './game-card-list-styled';
import GameCard from '../GameCard/GameCard';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../../../../shared/Loading/Loading';

const GameCardList = () => {
  const { games, gamesCount, getGamesStatus, getGamesMsg } =
    useAppSelector(selectGamesSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetGames());
    dispatch(getAllGames({ limit: 10, offset: 0 }));
  }, [dispatch]);

  // Due to how jsdom works, there is no current way to cover the infinite scroll "next" function with Jest.
  // Cypress tests the right behaviour of this function with an E2E test.
  /* istanbul ignore next */
  const handleScroll = () => {
    dispatch(getAllGames({ limit: 10, offset: games.length }));
  };

  const gamesListContent = () => {
    switch (getGamesStatus) {
      case 'success':
        return (
          <InfiniteScroll
            next={handleScroll}
            dataLength={games.length}
            hasMore={games.length < gamesCount}
            scrollThreshold={0.9}
            loader={<Spinner size={64} color={'tertiary'} />}
            endMessage={
              <div className="games-list__end">
                <p>There's not much more to see here...</p>
                <p>¡You've seen it all!</p>
              </div>
            }
          >
            <ul className="games-list__list">
              {games.map((game) => (
                <li key={`game-${game._id}`}>
                  <GameCard game={game} />
                </li>
              ))}
            </ul>
          </InfiniteScroll>
        );
      case 'error':
        return <p>Error loading games ({getGamesMsg})</p>;
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
      <GameCardListContainer>{gamesListContent()}</GameCardListContainer>
    </>
  );
};

export default GameCardList;
