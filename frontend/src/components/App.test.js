import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import App from './App';
import '@testing-library/jest-dom/extend-expect';

const store = createStore(rootReducer)

test('renders button that filters the active to-do entries', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>);
  const linkElement = getByText(/Active/i);
  expect(linkElement).toBeInTheDocument();
});
