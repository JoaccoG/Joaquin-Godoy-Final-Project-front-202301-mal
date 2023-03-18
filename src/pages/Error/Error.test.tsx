import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Error from './Error';

describe('Given an error page', () => {
  test('When the page renders, then it should render a main element', () => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
