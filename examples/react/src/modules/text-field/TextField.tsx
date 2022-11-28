import React, { useState } from 'react';
import { register, LeTextField, SeTextField } from 'awesome-components';

register(LeTextField, SeTextField);

export default () => {
  const [text, setText] = useState('');

  return (
    <>
      <le-text-field
        value={text}
        onInput={(event: Event) => setText((event.target as HTMLInputElement).value)}
      ></le-text-field>

      <se-text-field
        value={text}
        onInput={(event: Event) => setText((event.target as HTMLInputElement).value)}
      ></se-text-field>

      {text}
    </>
  );
};
