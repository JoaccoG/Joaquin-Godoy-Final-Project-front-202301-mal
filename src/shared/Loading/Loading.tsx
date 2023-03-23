import React, { FC } from 'react';
import { SpinnerContainer, SpinnerComponent } from './loading-styled';

export interface SpinnerProps {
  size: number;
  color: 'primary' | 'secondary' | 'tertiary';
}

const Spinner: FC<SpinnerProps> = ({ size, color }) => {
  return (
    <SpinnerContainer data-testid="spinner">
      <SpinnerComponent size={size} color={color}></SpinnerComponent>
    </SpinnerContainer>
  );
};

export default Spinner;
