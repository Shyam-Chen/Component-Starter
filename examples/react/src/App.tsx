import React, { useState } from 'react';
import { register, SimpleGreeting, MyButton } from 'awesome-components';

import { Foo } from './Foo';

register(SimpleGreeting, MyButton);

export function App() {
  const [myLabel, setMyLabel] = useState('');

  const myClick = (event: CustomEvent) => {
    console.log(event);
    setMyLabel(event.detail.label);
  };

  return (
    <>
      <simple-greeting name="World"></simple-greeting>
      <Foo />

      <my-button my-label="My Button (React)" onMyClick={myClick}></my-button>
      {myLabel}
    </>
  );
}
