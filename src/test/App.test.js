import React from 'react';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from '../components/App';
import { initialState } from '../constant';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('renders App component with initial state', () => {
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByRole('heading', { name: /смартфоны/i }));
});
