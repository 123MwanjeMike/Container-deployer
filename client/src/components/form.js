import React, { useState } from 'react';
import * as fetchFunctions from '../api';

export default function Form() {
  const [imageURI, setImageURI] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchFunctions.postData(
      { imageURI },
      `${process.env.REACT_APP_SERVER_URL}/container/deploy`,
    );
  };

  return (
    <>
      <p>Enter URI of your docker image</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          id='imageURI'
          value={imageURI}
          onChange={(e) => setImageURI(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}
