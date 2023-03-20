import styled from 'styled-components';

export const PostCardContainer = styled.article`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .post-card__game-info {
    width: 100%;
    img {
      width: 100%;
      height: var(--margin-l);
      object-fit: cover;
      object-position: center;
      aspect-ratio: 1;
    }
  }
`;
