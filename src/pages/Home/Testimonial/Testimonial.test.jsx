import React from 'react';
import { render } from '@testing-library/react';
import Testimonial from './Testimonial'; // Import your component

test('renders without errors', () => {
  render(<Testimonial />);
});