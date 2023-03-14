import styled from 'styled-components';

export const RegisterFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--margin-l);
  padding: var(--padding-s);
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
      outline: var(--color-secondary) 1px solid;
      color: var(--color-primary);
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
