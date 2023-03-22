import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../../mocks/utils';
import { screen } from '@testing-library/react';
import RequireAuth from './RequireAuth';

describe('Given a require auth component', () => {
  describe('When the user has an accessToken', () => {
    test('Then it should render the children', () => {
      sessionStorage.setItem('accessToken', 'test');
      renderWithProviders(
        <MemoryRouter>
          <RequireAuth children={<h1>Test</h1>} />
        </MemoryRouter>
      );

      expect(screen.getByText(/Test/i)).toBeInTheDocument();
    });
  });
});
