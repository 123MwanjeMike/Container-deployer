import React, { useState } from 'react';

export default function Index() {
  const [imageURI, setImageURI] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(userActions.logIn({ imageURI }));
  };

  return (
    <header className='App-header'>
      <p>Enter URI of your docker image</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='imageURI'
          value={imageURI}
          onChange={(e) => setImageURI(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      <a className='App-link' href='/' rel='noopener noreferrer'>
        Back
      </a>
    </header>
  );
}
