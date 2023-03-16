import styled from 'styled-components';

interface AuthStatusProps {
  authStatus: 'idle' | 'success' | 'error';
}

export const AuthFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--margin-l);
  input {
    min-width: 200px;
    width: 100%;
    max-width: 500px;
    font-size: var(--font-size-s);
    font-family: var(--font-family-inter-bold);
    font-weight: var(--font-weight-l);
    color: var(--color-secondary);
    background-color: var(--bg-color-tertiary);
    padding: var(--padding-s) var(--padding-m);
    border: none;
    border-radius: var(--border-m);
    transition: var(--transition-short);
    &:focus {
      outline: var(--color-success) 1px solid;
      color: var(--color-primary);
    }
    &:required:invalid {
      outline: var(--color-danger) 1px solid;
    }
    &:required:invalid:not(:focus) {
      outline: none;
    }
    &:required:valid {
      outline: var(--color-success) 1px solid;
    }
  }
  .submit-btn {
    width: 200px;
    font-size: var(--font-size-m);
    font-family: var(--font-family-inter-bold);
    font-weight: var(--font-weight-l);
    color: var(--color-primary);
    background-color: var(--color-tertiary);
    padding: var(--padding-xs) var(--padding-m);
    border: none;
    border-radius: var(--border-m);
    transition: var(--transition-short);
    &:hover {
      cursor: pointer;
      background-color: var(--color-tertiary-hover);
      transform: scale(1.05);
    }
  }
`;

export const AuthStatusFeedback = styled.div<AuthStatusProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--margin-s);
  padding: var(--padding-s);
  text-align: center;
  color: var(--color-secondary);
  font-size: var(--font-size-s);
  color: ${(props) => {
    switch (props.authStatus) {
      case 'success':
        return 'var(--color-success)';
      case 'error':
        return 'var(--color-danger)';
      default:
        return 'var(--color-secondary)';
    }
  }};
`;
