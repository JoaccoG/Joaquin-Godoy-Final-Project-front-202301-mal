import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: var(--margin-xxxl) var(--margin-l) var(--margin-l);

  @media screen and (min-width: 1024px) {
    padding: var(--margin-l) var(--margin-l) var(--margin-l)
      calc(var(--margin-l) + 300px);
  }
`;
