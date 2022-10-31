<script lang="ts" setup>
import { ref } from 'vue';
import { SimpleGreeting, MyElement, MyButton } from '../../../dist/awesome-components';

import Foo from './Foo.vue';

const myLabel = ref('');

const myClick = (event) => {
  console.log(event);
  myLabel.value = event.detail.label;
};
</script>

<template>
  <Foo />
  <simple-greeting name="World"></simple-greeting>
  <my-element></my-element>

  <my-button @myClick="myClick">My Click</my-button>
  {{ myLabel }}
</template>
