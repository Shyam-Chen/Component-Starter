import React, { useState } from 'react';
import { createComponent } from '@lit-labs/react';
import { SimpleGreeting, MyButton } from '../../../dist/awesome-components';

import { Foo } from './Foo';

const SimpleGreetingComponent = createComponent({
  tagName: 'simple-greeting',
  elementClass: SimpleGreeting,
  react: React,
});

const MyButtonComponent = createComponent({
  tagName: 'my-button',
  elementClass: MyButton,
  react: React,
  events: {
    onmyClick: 'myClick',
  },
});


export function App() {
  const [myLabel, setMyLabel] = useState('');

  const myClick = (event) => {
    console.log(event);
    setMyLabel(event.detail.label);
  };

  return (
    <>
      <SimpleGreetingComponent name="World" />
      <Foo />

      <MyButtonComponent onmyClick={myClick} />
      {myLabel}
    </>
  );
}
