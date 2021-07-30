import React from 'react';

// Components
import Welcome from '../components/welcome';
import Form from '../components/form';
import Link from '../components/link';

export default function Index() {

  return (
    <header className='App-header'>
      <Welcome />
      <Link />
    </header>
  );
}
