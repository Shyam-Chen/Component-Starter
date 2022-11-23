import React, { useState } from 'react';
import { register, WcSwitch } from 'awesome-components';

register(WcSwitch);

export function App() {
  const [checked, setChecked] = useState(false);

  const changeWcSwitch = (event: CustomEvent) => {
    setChecked(!event.detail.checked);
  };

  return (
    <>
      <wc-switch checked={checked} onChange={changeWcSwitch}>
        Switch in React
      </wc-switch>
    </>
  );
}
