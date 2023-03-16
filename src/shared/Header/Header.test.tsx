import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';

describe('Given a header component', () => {
  test('When the component is rendered, then there should be a header element.', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('When the hamburger menu button is clicked, then his class should switch.', async () => {
    render(<Header />);
    const btnElement = screen.getByRole('button');
    expect(btnElement).not.toHaveClass('active');

    await fireEvent.click(btnElement);

    expect(btnElement).toHaveClass('active');
  });
});
