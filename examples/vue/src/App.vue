<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';
import { MdFilledTextField } from '@material/web/textfield/filled-text-field';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import { reactive } from 'vue';
import { WcHello, WcSwitch, SimpleGreeting } from 'awesome-components';
import { LeCheckbox, LeTextField, SeCheckbox, SeTextField } from 'awesome-components';

const flux = reactive({
  textfield: '',
  inputTextfield(event: Event) {
    flux.textfield = (event.target as HTMLInputElement).value;
  },

  text: '',
  helloClick(event: CustomEvent) {
    flux.text = event.detail.helloText;
  },

  checked: true,
  changeWcSwitch(event: CustomEvent) {
    flux.checked = !event.detail.checked;
  },
  changeCheckbox(event: Event) {
    flux.checked = (event.target as HTMLInputElement).checked;
  },
});
</script>

<template>
  <simple-greeting name="World"></simple-greeting>

  <md-filled-text-field label="Filled Text Field" :value="flux.textfield" @input="flux.inputTextfield">
  </md-filled-text-field>
  <md-outlined-text-field label="Outlined Text Field" :value="flux.textfield" @input="flux.inputTextfield">
  </md-outlined-text-field>
  {{ flux.textfield }}

  <wc-hello hello-text="Hello Vue" @hello-click="flux.helloClick"> ({{ flux.text }}) </wc-hello>

  <wc-switch :checked="flux.checked" @change="flux.changeWcSwitch">
    Switch in Vue ({{ flux.checked }})
  </wc-switch>

  <wc-switch :checked="flux.checked" disabled @change="flux.changeWcSwitch"></wc-switch>

  <le-text-field label="Text Field" :value="flux.textfield" @input="flux.inputTextfield"></le-text-field>
  <le-text-field label="Text Field" :value="flux.textfield" @input="flux.inputTextfield"></le-text-field>

  <se-text-field label="Text Field" :value="flux.textfield" @input="flux.inputTextfield"></se-text-field>
  <se-text-field label="Text Field" :value="flux.textfield" @input="flux.inputTextfield"></se-text-field>

  <le-checkbox :checked="flux.checked" @change="flux.changeCheckbox"></le-checkbox>
  <le-checkbox :checked="flux.checked" @change="flux.changeCheckbox"></le-checkbox>

  <se-checkbox :checked="flux.checked" @change="flux.changeCheckbox"></se-checkbox>
  <se-checkbox :checked="flux.checked" @change="flux.changeCheckbox"></se-checkbox>

  <div>
    <RouterLink to="/">Home</RouterLink> /
    <RouterLink to="/text-field">Text Field</RouterLink>
  </div>

  <RouterView />
</template>
