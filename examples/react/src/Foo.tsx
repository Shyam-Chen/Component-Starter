import React from 'react';
import { createComponent } from '@lit-labs/react';
import { SimpleGreeting } from '../../../dist/awesome-components';

const SimpleGreetingComponent = createComponent({
  tagName: 'simple-greeting',
  elementClass: SimpleGreeting,
  react: React,
});

export function Foo() {
  return <SimpleGreetingComponent />;
}
