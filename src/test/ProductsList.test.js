import React from 'react';
import { render, screen } from '../../__mocks__/test-utils';
import ProductsList from '../components/ProductsList/ProductsList';
import { initialState } from '../constant';

describe('test product list', () => {
  it('renders with default loading...', async () => {
    render(<ProductsList />, initialState);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
  it('renders with product data', async () => {});
});
