import { render, screen } from '@testing-library/react';
import App from './App';

test('Displays Crane Cloud logo', () => {
    render(<App />);
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo.svg');
    expect(logo).toHaveAttribute('alt', 'Logo');
});

test('Welcomes users', () => {
    render(<App />);
    const welcomeText = screen.getByText(/Welcome to our Deployment Utility/i);
    expect(welcomeText).toBeInTheDocument();
});

test('Continue link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Continue/i);
  expect(linkElement).toBeInTheDocument();
});

