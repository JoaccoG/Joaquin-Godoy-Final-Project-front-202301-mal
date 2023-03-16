import React, { FC } from 'react';
import { SpinnerContainer } from './spinner-styled';

export interface SpinnerProps {
  size: number;
  color: 'primary' | 'secondary' | 'tertiary';
}

const Spinner: FC<SpinnerProps> = ({ size, color }) => {
  return <SpinnerContainer size={size} color={color} data-testid="spinner" />;
};

export default Spinner;
