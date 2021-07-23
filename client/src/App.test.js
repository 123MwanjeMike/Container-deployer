import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Welcomes users', () => {
  render(<App />);
  const welcomeText = screen.getByText(/Welcome to the Deployment Utility/i);
  expect(welcomeText).toBeInTheDocument();
});

test('Captures the image url', () => {
  render(<App />);
  const linkElement = screen.getByText(/Continue/i);
  expect(linkElement).toBeInTheDocument();
});
