import styled from 'styled-components';

interface PostCardProps {
  gameBanner: string;
}

export const PostCardContainer = styled.article<PostCardProps>`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--margin-xs);
  background-color: var(--bg-color-tertiary);
  box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 12px 4px;
  margin: var(--margin-l) auto;
  padding: var(--padding-s);
  border: none;
  border-radius: var(--border-xs);
  .post-card__user-info {
    width: 100%;
    a {
      display: flex;
      align-items: center;
      gap: var(--margin-s);
      img {
        width: 42px;
        height: 42px;
        object-fit: cover;
        object-position: center;
        border-radius: var(--border-xl);
      }
      p {
        font-size: var(--font-size-s);
        font-family: var(--font-family-inter-bold);
        color: var(--color-tertiary);
      }
    }
  }
  .post-card__game-info {
    width: 100%;
    border-radius: var(--border-s);
    a {
      position: relative;
      display: flex;
      align-items: center;
      .game-info__banner {
        position: absolute;
        width: 100%;
        height: 32px;
        object-fit: cover;
        object-position: center;
        aspect-ratio: 1;
        border-radius: var(--border-s);
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url(${(props) => props.gameBanner});
        box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.15);
      }
      p {
        position: relative;
        z-index: 1;
        color: var(--color-primary);
        font-family: var(--font-family-inter-bold);
        font-size: var(--font-size-xxs);
        padding: 0 var(--padding-s) 0;
      }
    }
  }
  .post-card__post-info {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: var(--margin-xxs);
    gap: var(--margin-xxs);
    ul {
      display: flex;
      gap: var(--margin-xxs);
      li {
        color: var(--color-secondary);
        .active {
          color: var(--color-tertiary);
        }
      }
    }
    .post-info__date {
      display: flex;
      align-items: center;
      font-size: var(--font-size-xxs);
      gap: var(--margin-xs);
      .date__icon {
        color: var(--color-secondary);
      }
      span {
        color: var(--color-secondary);
      }
    }
  }
  .post-card__review {
    width: 100%;
    .review__img-container {
      width: 100%;
      display: flex;
      justify-content: center;
      img {
        max-height: 120px;
        object-fit: cover;
        object-position: center;
      }
    }
  }
`;
