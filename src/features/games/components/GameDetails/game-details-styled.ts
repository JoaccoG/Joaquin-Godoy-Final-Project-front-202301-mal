import styled from 'styled-components';

export const GameDetailsContainer = styled.article`
  width: 100%;
  .game__hero {
    position: relative;
    width: 100% + 4rem;
    height: 50vh;
    min-height: 250px;
    margin: calc(0px - var(--margin-xxxl)) calc(0px - var(--margin-m))
      var(--margin-s);
    a {
      .game__hero--back {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        margin: var(--margin-m) 0 0 var(--margin-m);
        color: var(--color-primary);
        font-size: var(--font-size-xxxl);
      }
    }
    .game__hero--overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.9) 0.15%,
        rgba(0, 0, 0, 0) 50%
      );
    }
    .game__hero--banner {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .game__title {
    padding: var(--padding-xs) 0;
    font-size: var(--font-size-xl);
    text-transform: capitalize;
  }
  .game__tags {
    width: 100%;
    .game-tags__list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: var(--margin-xs);
      .game-tags__list--item {
        padding: var(--padding-xxs) var(--padding-s);
        border-radius: var(--border-s);
        background-color: var(--color-tertiary-opacity);
        color: var(--color-tertiary);
        font-size: var(--font-size-xxs);
        font-family: var(--font-family-inter-bold);
      }
    }
  }
  .game__description {
    width: 100%;
    padding: var(--padding-m) 0;
    text-align: center;
    p {
      font-size: var(--font-size-xxs);
      color: var(--color-secondary);
    }
  }
  .game__data {
    .game-data__list {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: var(--margin-s);
      .game-data-list__item {
        display: flex;
        gap: var(--margin-xxs);
        font-size: var(--font-size-m);
        .game-data-list__item--icon {
          color: var(--color-tertiary);
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .game__description {
      p {
        font-size: var(--font-size-s);
      }
    }
    .game__data {
      .game-data__list {
        .game-data-list__item {
          font-size: var(--font-size-l);
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .game__hero {
      min-height: 300px;
      margin: calc(0px - var(--margin-l)) calc(0px - var(--margin-l))
        var(--margin-s);
      a {
        .game__hero--back {
          position: absolute;
          right: 0;
          left: unset;
          margin: var(--margin-m) var(--margin-m) 0 0;
        }
      }
    }
    .game__title {
      padding: var(--padding-s) 0;
    }
    .game__tags {
      .game-tags__list {
        gap: var(--margin-m);
        .game-tags__list--item {
          padding: var(--padding-xxs) var(--padding-m);
          font-size: var(--font-size-xs);
        }
      }
    }
  }
`;
