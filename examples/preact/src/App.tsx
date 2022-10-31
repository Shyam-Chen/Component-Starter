import { useState } from 'preact/hooks';
import { SimpleGreeting, MyButton } from '../../../dist/awesome-components';

import { Foo } from './Foo';

SimpleGreeting;
MyButton;

export function App() {
  const [myLabel, setMyLabel] = useState('');

  const myClick = (event) => {
    console.log(event);
    setMyLabel(event.detail.label);
  };

  return (
    <>
      <simple-greeting name="World"></simple-greeting>
      <Foo />

      <my-button onmyClick={myClick}></my-button>
      {myLabel}
    </>
  );
}
