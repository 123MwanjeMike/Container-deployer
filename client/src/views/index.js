import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Welcome from '../components/welcome';
import Form from '../components/form';

import * as appActions from '../redux/actions';

export default function Index() {
  const dispatch = useDispatch();
  const component = useSelector((state) => state?.app?.component);
  const buttonText = useSelector((state) => state?.app?.buttonText);

  const clickFunction = (e) => {
    e.preventDefault();
    console.log(0);
    if (component === 'Welcome') dispatch(appActions.continueClick());
    if (component === 'Form') dispatch(appActions.backClick());
  };

  return (
    <header className='App-header'>
      {component === 'Welcome' ? <Welcome /> : null}
      {component === 'Form' ? <Form /> : null}
      <button onClick={clickFunction} >
        {buttonText}
      </button>
    </header>
  );
}
