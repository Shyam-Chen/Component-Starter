<script lang="ts" setup>
import { reactive } from 'vue';
import { WcHello, WcSwitch } from 'awesome-components';

const flux = reactive({
  text: '',
  helloClick(event: CustomEvent) {
    flux.text = event.detail.helloText;
  },

  checked: true,
  changeWcSwitch(event: CustomEvent) {
    flux.checked = !event.detail.checked;
  },
});
</script>

<template>
  <wc-hello hello-text="Hello Vue" @hello-click="flux.helloClick">
    ({{ flux.text }})
  </wc-hello>

  <wc-switch :checked="flux.checked" @change="flux.changeWcSwitch">
    Switch in Vue ({{ flux.checked }})
  </wc-switch>

  <wc-switch :checked="flux.checked" disabled @change="flux.changeWcSwitch"></wc-switch>
</template>
