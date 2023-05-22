import styled from 'styled-components';

export const GameCardListContainer = styled.section`
  width: 100%;
  .games-list__list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--margin-m);
  }
  .games-list__end {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--margin-s);
    padding: var(--margin-s);
    text-align: center;
    p {
      font-size: var(--font-size-s);
      color: var(--color-secondary);
    }
  }

  @media screen and (min-width: 1200px) {
    .games-list__list {
      gap: var(--margin-l);
    }
  }
  @media screen and (min-width: 1440px) {
    .games-list__list {
      gap: var(--margin-xl);
    }
  }
`;
