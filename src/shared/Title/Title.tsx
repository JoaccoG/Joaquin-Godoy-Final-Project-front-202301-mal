import { FC } from 'react';
import { TitleStyled } from './title-styled';

export interface TitleProps {
  text: string;
  size: 'small' | 'large';
  color: 'primary' | 'secondary' | 'tertiary';
  align?: 'left' | 'center' | 'right';
}

const Title: FC<TitleProps> = ({ text, size, color, align = 'center' }) => {
  return (
    <TitleStyled size={size} color={color} align={align}>
      {text}
    </TitleStyled>
  );
};

export default Title;
