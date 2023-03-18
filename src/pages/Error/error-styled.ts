import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: var(--margin-l);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--margin-xl);
  .error__text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    span {
      color: var(--color-tertiary);
      font-size: var(--margin-l);
    }
    h1 {
      font-size: var(--margin-xl);
      font-family: var(--font-family-ubuntu-bold);
      margin: var(--margin-s) 0 var(--margin-xl);
    }
    p {
      font-size: var(--font-size-s);
      color: var(--color-secondary);
      margin-bottom: var(--margin-s);
    }
    a {
      display: block;
      margin: 0 auto;
      cursor: pointer;
      font-size: var(--font-size-s);
      font-family: var(--font-family-inter-bold);
      color: var(--color-primary);
      background-color: var(--color-tertiary);
      padding: var(--padding-s) var(--padding-l);
      border-radius: var(--border-xs);
      transition: var(--transition-short);
      &:hover {
        background-color: var(--color-tertiary-hover);
        transform: scale(1.05);
      }
    }
  }
  .error__img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      max-width: 420px;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: var(--margin-xxxl);
    .error__text {
      width: 50%;
      span {
        font-size: var(--font-size-xl);
      }
      h1 {
        margin: var(--margin-m) 0 var(--margin-xxl);
      }
      p {
        margin-bottom: var(--margin-l);
      }
    }
    .error__img {
      width: 50%;
    }
  }
`;
