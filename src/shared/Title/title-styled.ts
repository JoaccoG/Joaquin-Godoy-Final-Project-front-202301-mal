import styled from 'styled-components';

interface TitleStyledProps {
  size: 'small' | 'large';
  color: 'primary' | 'secondary' | 'tertiary';
  align: 'left' | 'center' | 'right';
}

export const TitleStyled = styled.h1<TitleStyledProps>`
  font-size: ${({ size }) =>
    size === 'small' ? 'var(--font-size-l)' : 'var(--font-size-xl)'};
  font-family: var(--font-family-inter-bold);
  font-weight: var(--font-weight-l);
  color: var(--color-${({ color }) => color});
  text-align: ${({ align }) => align};
  margin: var(--margin-m) 0;
  padding: 0;

  @media screen and (min-width: 1024px) {
    font-size: ${({ size }) =>
      size === 'small' ? 'var(--font-size-xl)' : 'var(--font-size-xxxl)'};
  }
`;
