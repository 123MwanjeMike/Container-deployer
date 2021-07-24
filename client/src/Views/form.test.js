import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './form';

test('Text input accepts text entry', () => {
  render(<Form />);
  document.getElementById('imageURI').value = 'https://my.docker.image.url.com';
  const urlValue = screen.getByDisplayValue('https://my.docker.image.url.com');
  expect(urlValue).toBeInTheDocument();
});
