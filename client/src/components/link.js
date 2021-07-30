import React, { useState } from 'react';

export default function Link() {
  const [link, setLink] = useState('/');
  const [text, setText] = useState('Continue');

  const clickFunction = (e) => {
    e.preventDefault();
    if (link === '/') {
      setLink('/form');
      setText('Continue');
    }
    if (link === '/form') {
      setLink('/');
      setText('Back');
    }
  };

  return (
    <a
      onClick={clickFunction}
      className='App-link'
      href={link}
      rel='noopener noreferrer'
    >
      {text}
    </a>
  );
}
