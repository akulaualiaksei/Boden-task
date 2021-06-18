import React from 'react';
import { render, screen } from '../../__mocks__/test-utils';
import ListProductItem from '../components/ListProductItem/ListProductItem';
import { initialState } from '../constant';

describe('test product list', () => {
  it('renders with default loading...', async () => {
    const { debug } = render(<ListProductItem />, initialState);
    debug();
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
  it('renders with product data', async () => {});
});
