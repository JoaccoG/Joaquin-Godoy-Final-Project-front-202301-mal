import styled from 'styled-components';

export const UserProfileContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .user-profile__avatar {
    width: 100%;
    height: calc(250px - var(--padding-xxxl));
    .hero-container__avatar {
      width: 100%;
      height: 250px;
      object-fit: cover;
      object-position: center;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      border-radius: 0 0 var(--border-s) var(--border-s);
    }
  }
  .user-profile__credentials {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .profile-hero__container {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--margin-l);
      .hero-container__buttons {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--margin-m);
        margin: 0 0 var(--margin-xl) 0;
        position: absolute;
        bottom: -60px;
        button {
          z-index: 2;
          padding: var(--padding-xs) var(--padding-l);
          font-size: var(--font-size-s);
          font-family: var(--font-family-inter-bold);
          color: var(--color-primary);
          background-color: var(--color-tertiary);
          border: 0;
          border-radius: var(--border-s);
          transition: var(--transition-short);
          &:hover {
            cursor: pointer;
            background-color: var(--color-tertiary-hover);
          }
        }
      }
    }
    .profile-hero__username {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: var(--font-size-xl);
        font-family: var(--font-family-inter-bold);
      }
      span {
        font-size: var(--font-size-m);
        color: var(--color-tertiary);
      }
    }
  }
  .user-profile__info {
    width: 100%;
    display: flex;
    gap: var(--margin-s);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: var(--margin-s) 0;
    .profile-info__bio {
      width: 100%;
      text-align: center;
      p {
        font-size: var(--font-size-xs);
        color: var(--color-secondary);
      }
    }
    .profile-info__stats {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .stats__counter {
        text-align: center;
        p {
          font-size: var(--font-size-m);
          font-family: var(--font-family-inter-bold);
        }
        span {
          color: var(--color-secondary);
          font-size: var(--font-size-xs);
          font-family: var(--font-family-inter-bold);
        }
      }
      .stats__separator {
        height: 90%;
        width: 2px;
        background-color: var(--color-tertiary);
      }
    }
    .profile-info__fav-games {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: var(--margin-l);
      h2 {
        font-size: var(--font-size-xl);
        font-family: var(--font-family-inter-bold);
        margin-bottom: var(--margin-s);
      }
    }
  }
  .user-profile__posts {
    width: 100%;
    margin-top: var(--margin-l);
    h2 {
      text-align: center;
      font-size: var(--font-size-xl);
      font-family: var(--font-family-inter-bold);
    }
  }

  @media screen and (min-width: 768px) {
    .user-profile__avatar {
      height: calc(350px - var(--padding-xxxl));
      .hero-container__avatar {
        height: 350px;
        border-radius: 0 0 var(--border-m) var(--border-m);
      }
    }
    .user-profile__credentials {
      .profile-hero__container {
        margin-bottom: var(--margin-xxxl);
        .hero-container__buttons {
          gap: var(--margin-xl);
          margin: 0 0 var(--margin-l) 0;
          button {
            padding: var(--padding-s) var(--padding-xl);
            font-size: var(--font-size-m);
            border-radius: var(--border-m);
          }
        }
      }
      .profile-hero__username {
        h1 {
          font-size: var(--font-size-xxl);
        }
        span {
          font-size: var(--font-size-l);
        }
      }
    }
    .user-profile__info {
      gap: var(--margin-m);
      margin: var(--margin-m) 0;
      .profile-info__bio {
        p {
          font-size: var(--font-size-m);
        }
      }
      .profile-info__stats {
        height: 80px;
        justify-content: space-evenly;
        .stats__counter {
          p {
            font-size: var(--font-size-xl);
          }
          span {
            font-size: var(--font-size-m);
          }
        }
        .stats__separator {
          height: 90%;
          width: 2px;
          background-color: var(--color-tertiary);
        }
      }
      .profile-info__fav-games {
        h2 {
          font-size: var(--font-size-xxl);
        }
      }
    }
    .user-profile__posts {
      h2 {
        font-size: var(--font-size-xxl);
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .user-profile__avatar {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: var(--margin-m);
      .hero-container__avatar {
        position: static;
        width: 350px;
        height: 350px;
        border: 1px solid var(--color-tertiary);
        border-radius: var(--border-xl);
      }
    }
    .user-profile__credentials {
      .profile-hero__container {
        margin-bottom: var(--margin-xxl);
        .hero-container__buttons {
          gap: 350px;
        }
      }
      .profile-hero__credentials {
        span {
          font-size: var(--font-size-xl);
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .user-profile__avatar {
      width: 100%;
      height: calc(400px - var(--padding-l));
      .hero-container__avatar {
        height: 400px;
      }
    }
    .user-profile__credentials {
      .profile-hero__container {
        .hero-container__buttons {
          button {
            padding: var(--padding-m) var(--padding-xxl);
          }
        }
      }
      .profile-hero__username {
        h1 {
          font-size: var(--font-size-xxl);
        }
        span {
          font-size: var(--font-size-xl);
        }
      }
    }
    .user-profile__info {
      gap: var(--margin-xl);
      margin: var(--margin-xl) 0;
      .profile-info__bio {
        p {
          font-size: var(--font-size-l);
        }
      }
      .profile-info__stats {
        height: 60px;
        .stats__counter {
          p {
            font-size: var(--font-size-xxl);
          }
          span {
            font-size: var(--font-size-xl);
          }
        }
        .stats__separator {
          height: 90%;
          width: 2px;
        }
      }
      .profile-info__fav-games {
        margin-top: var(--margin-xl);
        h2 {
          margin-bottom: var(--margin-m);
        }
      }
    }
  }
`;
