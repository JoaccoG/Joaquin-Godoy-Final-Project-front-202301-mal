import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../../mocks/utils';
import Layout from './Layout';

describe('Given a layout page', () => {
  test('When the layout is used, then it should render a main element', () => {
    renderWithProviders(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
