import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: var(--padding-xxxl) var(--padding-m) var(--padding-l);

  @media screen and (min-width: 1024px) {
    padding: var(--padding-l) var(--padding-l) var(--padding-l)
      calc(var(--padding-l) + 300px);
  }
`;
