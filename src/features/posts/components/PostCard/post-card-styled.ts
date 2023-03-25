import styled from 'styled-components';

interface PostCardProps {
  gameBanner: string;
}

export const PostCardContainer = styled.article<PostCardProps>`
  width: 327px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--margin-xs);
  background-color: var(--bg-color-secondary);
  box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 12px 4px;
  margin: var(--margin-l) auto;
  padding: var(--padding-s);
  border: none;
  border-radius: var(--border-xs);
  .post-card__user-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
      gap: var(--margin-s);
      img {
        width: 64px;
        height: 64px;
        object-fit: cover;
        object-position: center;
        border-radius: var(--border-xl);
      }
      .user-info__username {
        max-width: 215px;
        p {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: var(--font-size-s);
          font-family: var(--font-family-inter-bold);
          color: var(--color-primary);
        }
        span {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: var(--font-size-xs);
          color: var(--color-tertiary);
        }
      }
    }
    .user-info__delete-post {
      font-size: var(--font-size-m);
      margin: calc(var(--margin-xs) / 2) calc(var(--margin-xs) / 2) 0 0;
      svg {
        padding: calc(var(--margin-xxs) / 2);
        cursor: pointer;
      }
    }
  }
  .post-card__game-info {
    width: 100%;
    border-radius: var(--border-s);
    margin: var(--margin-m) 0;
    a {
      position: relative;
      display: flex;
      align-items: center;
      .game-info__banner {
        position: absolute;
        width: 100%;
        height: 48px;
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
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.15);
      }
      .game-info__name {
        position: relative;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
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
    .review__text {
      line-height: var(--font-size-l);
    }
    .review__img-container {
      width: 100%;
      display: flex;
      justify-content: center;
      img {
        margin: var(--margin-s) 0 var(--margin-xxs);
        max-width: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: var(--border-xs);
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 620px;
    padding: var(--padding-m);
    gap: var(--margin-s);
    .post-card__user-info {
      a {
        gap: var(--margin-m);
        img {
          width: 96px;
          height: 96px;
        }
        .user-info__username {
          max-width: 452px;
          p {
            font-size: var(--font-size-m);
          }
          span {
            font-size: var(--font-size-s);
          }
        }
      }
    }
    .post-card__game-info {
      a {
        .game-info__banner {
          height: 58px;
          margin: var(--margin-xs) 0;
        }
        .game-info__name {
          font-size: var(--font-size-s);
          padding: 0 var(--padding-l) 0;
        }
      }
    }
    .post-card__post-info {
      ul {
        li {
          font-size: var(--font-size-m);
        }
      }
      .post-info__date {
        font-size: var(--font-size-s);
      }
    }
    .post-card__review {
      .review__text {
        font-size: var(--font-size-s);
        line-height: var(--font-size-xl);
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 900px;
    padding: var(--padding-l);
    gap: var(--margin-m);
    .post-card__game-info {
      a {
        .game-info__banner {
          height: 72px;
          margin: var(--margin-s) 0;
        }
        .game-info__name {
          font-size: var(--font-size-m);
          padding: 0 var(--padding-xl) 0;
        }
      }
    }
    .post-card__review {
      .review__img-container {
        img {
          width: 80%;
        }
      }
    }
  }
`;
