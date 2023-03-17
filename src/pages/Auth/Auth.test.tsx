import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Auth from './Auth';

describe('Given an authentication page', () => {
  test('When the page is rendered, then there should be a title', () => {
    render(
      <Provider store={store}>
        <Auth />
      </Provider>
    );

    const title = screen.getByText('PlayersNation');
    expect(title).toBeInTheDocument();
  });

  test('When the button to switch auth type is clicked, then the form should change', async () => {
    render(
      <Provider store={store}>
        <Auth />
      </Provider>
    );

    const loginButton = screen.getByTestId('login-button');
    userEvent.click(loginButton);
    const loginForm = await screen.findByTestId('login-form');
    expect(loginForm).toBeInTheDocument();

    const registerButton = screen.getByTestId('register-button');
    userEvent.click(registerButton);
    const registerForm = await screen.findByTestId('register-form');
    expect(registerForm).toBeInTheDocument();
  });
});
