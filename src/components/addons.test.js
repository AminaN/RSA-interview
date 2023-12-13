import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import { isAddonSelected } from '../services/addonService';

import Addon from './addons';

test('renders addons correctly', () => {
// setting up mock api
  const addons = [
    {
      title: 'Addon 1',
      monthlyPrice: 10.0,
      text: 'Description for Addon 1',
    },
    {
      title: 'Addon 2',
      monthlyPrice: 15.0,
      text: 'Description for Addon 2',
    },
  ];

  const selectedAddons = [
    {
      title: 'Addon 1',
      monthlyPrice: 10.0,
      text: 'Description for Addon 1',
    },
  ];

  const onAdd = jest.fn();
  const onRemove = jest.fn();

  render(<Addon addons={addons} onAdd={onAdd} onRemove={onRemove} selectedAddons={selectedAddons} />);

  // Check if the rendered addons are correct
  expect(screen.getByText('Tailor Your Cover with Optional Extras')).toBeInTheDocument();
  expect(screen.getByText('Addon 1')).toBeInTheDocument();
  expect(screen.getByText('Addon 2')).toBeInTheDocument();

//  // Check if the add/remove buttons work
  fireEvent.click(screen.getByText('Remove Extra'));
  expect(onRemove).toHaveBeenCalledTimes(1);

  fireEvent.click(screen.getByText('Add Extra'));
  expect(onAdd).toHaveBeenCalledTimes(1);

});