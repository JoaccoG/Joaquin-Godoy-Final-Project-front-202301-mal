import { fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../../mocks/utils';
import Header from './Header';

describe('Given a header component', () => {
  test('When the component is rendered, then there should be a header element.', () => {
    renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('When the hamburger menu button is clicked, then his class should switch.', async () => {
    renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const btnElement = screen.getByRole('button');
    expect(btnElement).not.toHaveClass('active');
    await fireEvent.click(btnElement);
    expect(btnElement).toHaveClass('active');
  });

  test('When the user tries to log out, then he should not have an accessToken key on his sessionStorage', async () => {
    renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    await fireEvent.click(screen.getByTestId('logout-btn'));
    expect(sessionStorage.getItem('accessToken')).toBe(null);
  });
});
