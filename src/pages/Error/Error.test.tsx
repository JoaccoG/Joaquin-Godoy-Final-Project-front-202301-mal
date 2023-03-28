import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ErrorsPage from './Error';

describe('Given an error page', () => {
  test('When the page renders, then it should render a main element', () => {
    render(
      <MemoryRouter>
        <ErrorsPage />
      </MemoryRouter>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
