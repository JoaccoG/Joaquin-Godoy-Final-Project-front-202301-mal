import { render, screen } from '@testing-library/react';
import Spinner from './spinner';

describe('Given a Spinner component', () => {
  describe('When it is rendered', () => {
    test('Then it should be in the document', () => {
      render(<Spinner size={50} color="primary" />);
      const spinner = screen.getByTestId('spinner');
      expect(spinner).toBeInTheDocument();
    });
  });
});
