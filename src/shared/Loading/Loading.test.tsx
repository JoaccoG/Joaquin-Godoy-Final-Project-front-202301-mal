import { render, screen } from '@testing-library/react';
import Spinner from './Loading';

describe('Given a Loading component', () => {
  describe('When it is rendered', () => {
    test('Then it should be in the document', () => {
      render(<Spinner size={50} color="primary" />);
      const loading = screen.getByTestId('spinner');
      expect(loading).toBeInTheDocument();
    });
  });
});
