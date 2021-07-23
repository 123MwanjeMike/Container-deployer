import React from 'react';
import logo from '../logo.svg';

export default function Index() {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>Welcome to the Deployment Utility.</p>
      <a className='App-link' href='/form' rel='noopener noreferrer'>
        Continue
      </a>
    </header>
  );
}
