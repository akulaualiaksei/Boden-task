import React from 'react';
import { render, fireEvent, screen } from '../../__mocks__/test-utils';
import SwitchButton from '../components/SwitchButton/SwitchButton';
import { initialState } from '../constant';

describe('SwitchButton', () => {
  it('renders button', () => {
    render(<SwitchButton />, { initialState });
    const switchEl = screen.getByRole('checkbox');
    expect(switchEl).toBeInTheDocument();
    expect(switchEl).not.toBeChecked();
    fireEvent.click(switchEl);
    expect(switchEl).toBeInTheDocument();
  });
});
