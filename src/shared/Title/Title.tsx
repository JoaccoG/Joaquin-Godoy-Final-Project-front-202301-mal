import { FC } from 'react';
import { TitleStyled } from './title-styled';

export interface TitleProps {
  text: string;
  size: 'small' | 'large';
  color: 'primary' | 'secondary' | 'tertiary';
}

const Title: FC<TitleProps> = ({ text, size, color }) => {
  return (
    <TitleStyled size={size} color={color}>
      {text}
    </TitleStyled>
  );
};

export default Title;
