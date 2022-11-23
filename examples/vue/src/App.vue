<script lang="ts" setup>
import { reactive } from 'vue';
import { WcSwitch } from 'awesome-components';

const flux = reactive({
  wcSwitch: true,
  changeWcSwitch(event: CustomEvent) {
    flux.wcSwitch = !event.detail.checked;
  },
});
</script>

<template>
  <wc-switch :checked="flux.wcSwitch" @change="flux.changeWcSwitch">Switch in Vue</wc-switch>
</template>
