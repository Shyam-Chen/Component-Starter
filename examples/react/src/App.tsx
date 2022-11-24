import '@material/mwc-textfield';
import React, { useState } from 'react';
import { register, SimpleGreeting, WcHello, WcSwitch } from 'awesome-components';

register(SimpleGreeting, WcHello, WcSwitch);

export function App() {
  const [textfield, setTextfield] = useState('');
  const [text, setText] = useState(false);
  const [checked, setChecked] = useState(false);

  const inputTextfield = (event: Event) => {
    setTextfield((event.target as HTMLInputElement).value);
  };

  const helloClick = (event: CustomEvent) => {
    setText(event.detail.helloText);
  };

  const changeWcSwitch = (event: CustomEvent) => {
    setChecked(!event.detail.checked);
  };

  return (
    <>
      <simple-greeting name="World"></simple-greeting>

      <mwc-textfield label="Textfield" value={textfield} onInput={inputTextfield} />
      {textfield}

      <wc-hello helloText="Hello React" onHelloClick={helloClick}>
        ({text})
      </wc-hello>

      <wc-switch checked={checked} onChange={changeWcSwitch}>
        Switch in React ({String(checked)})
      </wc-switch>

      <wc-switch checked={checked} disabled onChange={changeWcSwitch}></wc-switch>
    </>
  );
}
