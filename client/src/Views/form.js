import React from 'react';

export default function Index() {
  const handleSubmit = (e) => {};

  return (
    <header className='App-header'>
      <p>Enter URI of your docker image</p>
      <form onSubmit={handleSubmit}>
        <input type='type' />
        <input type='submit' value='Submit' />
      </form>
      <a className='App-link' href='/' rel='noopener noreferrer'>
        Back
      </a>
    </header>
  );
}
