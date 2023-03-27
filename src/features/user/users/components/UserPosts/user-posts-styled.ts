import styled from 'styled-components';

export const UserPostsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--margin-s);
  .posts-list__end {
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

  @media screen and (min-width: 768px) {
    .posts-list__end {
      width: 100%;
      p {
        font-size: var(--font-size-m);
      }
    }
  }
`;
