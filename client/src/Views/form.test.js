import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './form';

test('Has url input', () => {
  render(<Form />);
  const input = screen.getByRole('urlInput');
  expect(input).toBeInTheDocument();
});