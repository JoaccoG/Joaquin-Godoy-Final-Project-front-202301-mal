import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Given a header component', () => {
  test('When the component is rendered, then there should be a header element.', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('When the hamburger menu button is clicked, then his class should switch.', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const btnElement = screen.getByRole('button');
    expect(btnElement).not.toHaveClass('active');

    await fireEvent.click(btnElement);

    expect(btnElement).toHaveClass('active');
  });
});
