import styled from 'styled-components';

interface TextareaProps {
  textareaHeight: number;
}

interface PostStatusProps {
  postStatus: 'idle' | 'success' | 'error';
}

export const PostFormContainer = styled.form<TextareaProps>`
  width: 100%;
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
      height: ${(props) => props.textareaHeight}px;
      min-height: 32px;
      color: var(--color-primary);
      background-color: var(--bg-color-tertiary);
      font-family: var(--font-family-inter-regular);
      font-size: var(--font-size-xxs);
      margin: var(--margin-m) 0 var(--margin-xs);
      border: none;
      resize: none;
      overflow: hidden;
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
      align-items: center;
      input {
        display: none;
      }
      span {
        width: 80%;
        height: 20px;
        overflow: hidden;
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
      width: 120px;
      height: var(--font-size-xl);
      color: var(--color-primary);
      background-color: var(--color-tertiary);
      font-size: var(--font-size-s);
      font-family: var(--font-family-inter-bold);
      border: none;
      border-radius: var(--border-xs);
      cursor: pointer;
      transition: var(--transition-short);
      &:hover {
        background-color: var(--color-tertiary-hover);
        transform: translateY(-4px);
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 80%;
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
        width: 60%;
        .wrapper-2__file-upload-icon {
          font-size: var(--font-size-xxl);
        }
      }
      button {
        width: 180px;
        height: var(--font-size-xxl);
        font-size: var(--font-size-m);
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 65%;
  }
`;

export const PostFormFeedback = styled.span<PostStatusProps>`
  display: block;
  width: 100%;
  font-size: var(--font-size-xxs);
  margin: 0 0 var(--margin-xs) var(--margin-xs);
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
  }
`;
