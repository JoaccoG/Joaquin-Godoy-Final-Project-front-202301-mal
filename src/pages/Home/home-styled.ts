import styled from 'styled-components';

export const HomeContainer = styled.section`
  width: 100%;
  h1 {
    font-size: var(--font-size-xxl);
    margin: var(--margin-l) 0;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: var(--font-size-xxxl);
      margin: var(--margin-xl) 0;
    }
  }
`;
