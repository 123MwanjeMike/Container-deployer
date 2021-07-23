import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from './Views/index';

test('Welcomes users', () => {
  render(<Index />);
  const welcomeText = screen.getByText(/Welcome to the Deployment Utility/i);
  expect(welcomeText).toBeInTheDocument();
});

test('Captures the image url', () => {
  render(<Index />);
  const linkElement = screen.getByText(/Continue/i);
  expect(linkElement).toBeInTheDocument();
});
