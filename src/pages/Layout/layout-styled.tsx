import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: var(--margin-l);

  @media screen and (min-width: 1024px) {
    padding-left: calc(var(--margin-l) + 300px);
  }
`;
