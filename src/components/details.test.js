import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

import Details from './details';

test('renders details correctly', () => {
// setting up mock api
  const quote = [{
    firstName: 'John',
    address1: '123 Main St',
    quoteRef: 'ABC123',
    startDate: '2023-01-01T00:00:00Z',
    monthlyPrice: 50.0,
    annualPrice: 600.0,
  }];

  const selectedAddons = [
    { title: 'Addon 1', monthlyPrice: 10.0, annualPrice: 120.0 },
    { title: 'Addon 2', monthlyPrice: 15.0, annualPrice: 180.0 },
  ];

  render(<Details quote={quote} selectedAddons={selectedAddons} />);

  // Check if the rendered details are correct
  expect(screen.getByText('Hey John')).toBeInTheDocument();
   expect(screen.getByText('Quote Reference: ABC123')).toBeInTheDocument();

    // Check if the switch button works
     fireEvent.click(screen.getByText('Switch to Annual'));
     expect(screen.getByText('Per Year')).toBeInTheDocument();

     // Check if the switch button works
     fireEvent.click(screen.getByText('Switch to Monthly'));
     expect(screen.getByText('Per Month')).toBeInTheDocument();

});