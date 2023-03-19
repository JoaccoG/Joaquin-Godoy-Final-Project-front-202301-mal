import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Home from './Home';

describe('Given an error page', () => {
  test('When the page renders, then it should render its child elements', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});
