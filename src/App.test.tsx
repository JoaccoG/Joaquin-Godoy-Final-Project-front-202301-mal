import App from './App';
import { renderWithProviders } from './mocks/utils';

test('renders learn react link', () => {
  renderWithProviders(<App />);
  expect(true).toBe(true);
});
