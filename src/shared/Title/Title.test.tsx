import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Title from './Title';

describe('Given a Title component', () => {
  describe('When it is rendered in small', () => {
    test('Then it should be in the document with the right size', () => {
      render(<Title text="Test" size="small" color="primary" />);
      const title = screen.getByRole('heading');
      expect(title).toBeInTheDocument();
      expect(title).toHaveStyleRule('font-size', 'var(--font-size-l)');
    });
  });

  describe('When it is rendered in large', () => {
    test('Then it should be in the document with the right size', () => {
      render(<Title text="Test" size="large" color="tertiary" />);
      const title = screen.getByRole('heading');
      expect(title).toBeInTheDocument();
      expect(title).toHaveStyleRule('font-size', 'var(--font-size-xl)');
    });
  });
});
