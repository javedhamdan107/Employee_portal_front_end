import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react"

import DetailField from './DetailField'; // Import the DetailField component

describe('DetailField component', () => {
  const props = {
    key: 'someKey',
    value: 'someValue',
    detail: 'Some Detail',
  };

  test('renders correctly with given props', () => {
    render(<DetailField {...props} />);

    const keyDetailElement = screen.getByTestId('detail-test');
    expect(keyDetailElement.innerHTML).toBe('Some Detail');

    const valueElement = screen.getByText(props.value);
    expect(valueElement.innerHTML).toBe('someValue');
  });

  test('renders Status component when detail is "Status"', () => {
 
    const statusProps = {
        ...props,
        detail: 'Status',
        value: 'Active', // Replace with appropriate status value
      };
  
    render(<DetailField {...statusProps} />);


    const valueElement = screen.getByText(statusProps.value);
    expect(valueElement.innerHTML).toBe('Active');
  });
});
