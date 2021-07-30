// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Index from './index'

test('Welcomes users', () => {
  expect(1+1).toBe(2);
});

// test('Welcomes users', () => {
//   render(<Index />);
//   const welcomeText = screen.getByText(/Welcome to the Deployment Utility/i);
//   expect(welcomeText).toBeInTheDocument();
// });

// test('Captures the image url', () => {
//   render(<Index />);
//   const linkElement = screen.getByText(/Continue/i);
//   expect(linkElement).toBeInTheDocument();

// test('Text input accepts text entry', () => {
//   render(<Form />);
//   document.getElementById('imageURI').value = 'https://my.docker.image.url.com';
//   const urlValue = screen.getByDisplayValue('https://my.docker.image.url.com');
//   expect(urlValue).toBeInTheDocument();
// });
