import styled from 'styled-components';

interface PostStatusProps {
  postStatus: 'idle' | 'success' | 'error';
}

export const PostFormContainer = styled.form`
  width: 327px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color-tertiary);
  box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.75);
  margin: 0 auto;
  padding: var(--padding-s);
  border-radius: var(--border-xs);
  &:focus {
    outline: none;
  }
  .post-form__wrapper-1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--margin-s);
    label {
      width: 100%;
      select {
        width: 100%;
        height: 40px;
        color: var(--color-primary);
        background-color: var(--bg-solid-opacity-secondary);
        font-size: var(--font-size-xxs);
        padding: 0 var(--padding-m);
        border: none;
        border-radius: var(--border-xs);
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        &:hover {
          cursor: pointer;
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
  label {
    width: 100%;
    textarea {
      width: 100%;
      height: 64px;
      min-height: 32px;
      color: var(--color-primary);
      background-color: var(--bg-color-tertiary);
      font-family: var(--font-family-inter-regular);
      font-size: var(--font-size-xxs);
      margin: var(--margin-m) 0 var(--margin-xs);
      border: none;
      resize: vertical;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: var(--color-secondary);
        font-style: italic;
      }
    }
  }
  .post-form__wrapper-2 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
      width: 50%;
      display: flex;
      padding-left: var(--padding-s);
      align-items: center;
      input {
        display: none;
      }
      span {
        width: 80%;
        height: 20px;
        overflow-x: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: var(--color-primary);
        font-style: italic;
        padding-left: var(--padding-xs);
        cursor: pointer;
      }
      .wrapper-2__file-upload-icon {
        font-size: var(--font-size-xl);
        cursor: pointer;
      }
    }
    button {
      color: var(--color-primary);
      background-color: var(--color-tertiary);
      font-size: var(--font-size-s);
      font-family: var(--font-family-inter-bold);
      border: none;
      border-radius: var(--border-m);
      padding: var(--padding-xs) var(--padding-xl);
      cursor: pointer;
      transition: var(--transition-short);
      &:hover {
        background-color: var(--color-tertiary-hover);
        transform: translateY(-4px);
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 620px;
    padding: var(--padding-m);
    .post-form__wrapper-1 {
      flex-direction: row;
      justify-content: space-between;
      label {
        select {
          height: 50px;
          font-size: var(--font-size-s);
        }
      }
    }
    label {
      textarea {
        font-size: var(--font-size-s);
        margin: var(--margin-l) 0;
      }
    }
    .post-form__wrapper-2 {
      label {
        width: 70%;
        .wrapper-2__file-upload-icon {
          font-size: var(--font-size-xxl);
        }
      }
      button {
        font-size: var(--font-size-m);
        padding: var(--padding-s) var(--padding-xxl);
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 900px;
  }
`;

export const PostFormFeedback = styled.span<PostStatusProps>`
  display: block;
  width: 100%;
  font-size: var(--font-size-xxs);
  margin: 0 var(--margin-xs) var(--margin-xs);
  color: ${(props) => {
    switch (props.postStatus) {
      case 'success':
        return 'var(--color-success)';
      case 'error':
        return 'var(--color-danger)';
      default:
        return 'var(--color-primary)';
    }
  }};

  @media screen and (min-width: 1024px) {
    font-size: var(--font-size-s);
    .post-form__wrapper-2 {
      button {
        padding: var(--padding-s) var(--padding-xxxl);
      }
    }
  }
`;
