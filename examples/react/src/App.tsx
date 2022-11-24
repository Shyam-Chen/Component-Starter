import React, { useState } from 'react';
import { register, WcHello, WcSwitch } from 'awesome-components';

register(WcHello, WcSwitch);

export function App() {
  const [text, setText] = useState(false);
  const [checked, setChecked] = useState(false);

  const helloClick = (event: CustomEvent) => {
    setText(event.detail.helloText);
  };

  const changeWcSwitch = (event: CustomEvent) => {
    setChecked(!event.detail.checked);
  };

  return (
    <>
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
