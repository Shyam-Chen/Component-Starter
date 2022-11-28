<script lang="ts" setup>
import { reactive } from 'vue';
import { LeTextField, SeTextField } from 'awesome-components';

const flux = reactive({
  text: '',
  inputText(event: Event) {
    flux.text = (event.target as HTMLInputElement).value;
  },
});
</script>

<template>
  <le-text-field :value="flux.text" @input="flux.inputText"></le-text-field>

  <se-text-field :value="flux.text" @input="flux.inputText"></se-text-field>

  {{ flux.text }}
</template>
