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
    expect(btnElement).not.toHaveClass('open');
    await fireEvent.click(btnElement);
    expect(btnElement).toHaveClass('open');
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

  test('When the user clicks on a link, then the active className should be added to it.', async () => {
    renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    await fireEvent.click(screen.getByTestId('home-link'));
    expect(screen.getByTestId('home-link')).toHaveClass('active');

    expect(screen.getByTestId('profile-link')).not.toHaveClass('active');
    await fireEvent.click(screen.getByTestId('profile-link'));
    expect(screen.getByTestId('home-link')).not.toHaveClass('active');
    expect(screen.getByTestId('profile-link')).toHaveClass('active');

    expect(screen.getByTestId('games-link')).not.toHaveClass('active');
    await fireEvent.click(screen.getByTestId('games-link'));
    expect(screen.getByTestId('games-link')).toHaveClass('active');

    expect(screen.getByTestId('statistics-link')).not.toHaveClass('active');
    await fireEvent.click(screen.getByTestId('statistics-link'));
    expect(screen.getByTestId('statistics-link')).toHaveClass('active');

    expect(screen.getByTestId('notifications-link')).not.toHaveClass('active');
    await fireEvent.click(screen.getByTestId('notifications-link'));
    expect(screen.getByTestId('notifications-link')).toHaveClass('active');

    expect(screen.getByTestId('messages-link')).not.toHaveClass('active');
    await fireEvent.click(screen.getByTestId('messages-link'));
    expect(screen.getByTestId('messages-link')).toHaveClass('active');

    expect(screen.getByTestId('contact-link')).not.toHaveClass('active');
    await fireEvent.click(screen.getByTestId('contact-link'));
    expect(screen.getByTestId('contact-link')).toHaveClass('active');
  });
});
