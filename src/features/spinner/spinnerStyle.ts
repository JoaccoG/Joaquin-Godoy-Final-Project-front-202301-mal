import styled from 'styled-components';
import { SpinnerProps } from './spinner';

export const SpinnerContainer = styled.div<SpinnerProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin: var(--margin-m);
  border-radius: var(--border-xl);
  box-shadow: 1px 2px 4px 1px var(--color-${({ color }) => color});
  animation: spin 1.5s infinite linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
