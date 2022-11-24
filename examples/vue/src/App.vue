<script lang="ts" setup>
import { MdFilledTextField } from '@material/web/textfield/filled-text-field';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';
import { reactive } from 'vue';
import { register, WcHello, WcSwitch, SimpleGreeting, TextField } from 'awesome-components';

register(MdFilledTextField, MdOutlinedTextField);

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
});
</script>

<template>
  <simple-greeting name="World"></simple-greeting>

  <md-filled-text-field
    label="Textfield"
    :value="flux.textfield"
    @input="flux.inputTextfield"
  ></md-filled-text-field>

  <md-outlined-text-field
    label="Textfield"
    :value="flux.textfield"
    @input="flux.inputTextfield"
  ></md-outlined-text-field>
  {{ flux.textfield }}

  <wc-hello hello-text="Hello Vue" @hello-click="flux.helloClick"> ({{ flux.text }}) </wc-hello>

  <wc-switch :checked="flux.checked" @change="flux.changeWcSwitch">
    Switch in Vue ({{ flux.checked }})
  </wc-switch>

  <wc-switch :checked="flux.checked" disabled @change="flux.changeWcSwitch"></wc-switch>

  <text-field :value="flux.textfield" @input="flux.inputTextfield"></text-field>
</template>
