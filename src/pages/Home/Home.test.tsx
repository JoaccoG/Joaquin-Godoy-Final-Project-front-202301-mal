import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Given an error page', () => {
  test('When the page renders, then it should render its child elements', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});
