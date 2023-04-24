import styled from 'styled-components';

interface GameCardContainerProps {
  banner: string;
}

export const GameCardContainer = styled.article<GameCardContainerProps>`
  width: 272px;
  height: 150px;
  border-radius: var(--border-xs);
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${(props) => props.banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .game-card__content {
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--padding-s);
    .game-card-content__title {
      color: var(--color-primary);
      font-family: var(--font-family-inter-bold);
    }
    .game-card-content__btn {
      width: fit-content;
      font-size: var(--font-size-xxs);
      color: var(--color-primary);
      background-color: var(--color-tertiary);
      padding: var(--padding-xxs) var(--padding-m);
      border: none;
      border-radius: var(--border-xs);
      transition: var(--transition-short);
      &:hover {
        cursor: pointer;
        background-color: var(--color-tertiary-hover);
        transform: translateY(-4px);
      }
    }
  }

  @media screen and (min-width: 375px) {
    width: 327px;
  }
  @media screen and (min-width: 1024px) {
    width: 310px;
    height: 160px;
  }
  @media screen and (min-width: 1200px) {
    width: 380px;
    height: 180px;
    .game-card__content {
      .game-card-content__title {
        font-size: var(--font-size-s);
      }
      .game-card-content__btn {
        font-size: var(--font-size-xs);
      }
    }
  }
  @media screen and (min-width: 1440px) {
    width: 450px;
    height: 200px;
    .game-card__content {
      padding: var(--padding-m);
      .game-card-content__title {
        font-size: var(--font-size-m);
      }
      .game-card-content__btn {
        font-size: var(--font-size-s);
      }
    }
  }
`;
