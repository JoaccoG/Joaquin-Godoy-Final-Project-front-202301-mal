import styled from 'styled-components';

export const AuthContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--margin-m);
  margin: var(--margin-m) 0;
  .auth__title {
    font-family: var(--font-family-ubuntu-bold);
    font-size: var(--font-size-xxl);
  }
  .auth__info {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--margin-l);
    margin: var(--margin-l) 0;
    .auth-info__item {
      min-width: 250px;
      max-width: 350px;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: var(--margin-s);
      .auth-info-item__icon {
        color: var(--color-tertiary);
        font-size: var(--font-size-xxxxl);
      }
      p {
        color: var(--color-secondary);
        font-size: var(--font-size-xs);
        span {
          display: block;
          color: var(--color-primary);
        }
      }
    }
  }
  .auth__buttons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: var(--margin-l);
    button {
      color: var(--color-secondary);
      background-color: transparent;
      font-size: var(--font-size-xl);
      font-family: var(--font-family-inter-bold);
      border: none;
      border-bottom: 3px solid transparent;
      cursor: pointer;
      transition: var(--transition-short);
      &:hover {
        color: var(--color-primary);
      }
    }
    .auth-buttons__btn--active {
      color: var(--color-primary);
      border-bottom: solid 3px var(--color-tertiary);
    }
  }

  @media screen and (min-width: 1024px) {
    .auth__title {
      font-size: var(--font-size-xxxxl);
    }
    .auth__info {
      .auth-info__item {
        max-width: 400px;
        p {
          font-size: var(--font-size-s);
        }
      }
    }
    .auth__buttons {
      width: 60%;
      button {
        font-size: var(--font-size-xxl);
      }
    }
  }
`;
