<script lang="ts">
  import '@material/mwc-textfield';
  import Router, { link } from 'svelte-spa-router';
  import { register, SimpleGreeting, WcHello, WcSwitch } from 'awesome-components';

  import router from '~/plugins/router';

  register(SimpleGreeting, WcHello, WcSwitch);

  let textfield = '';

  const inputTextfield = (event: Event) => {
    textfield = (event.target as HTMLInputElement).value;
  };

  let text = '';

  const helloClick = (event: CustomEvent) => {
    text = event.detail.helloText;
  };

  let checked = false;

  const changeWcSwitch = (event: CustomEvent) => {
    checked = !event.detail.checked;
  };
</script>

<simple-greeting name="World" />

<mwc-textfield label="Textfield" value={textfield} on:input={inputTextfield} />
{textfield}

<wc-hello hello-text="Hello Svelte" on:hello-click={helloClick}>
  ({text})
</wc-hello>

<wc-switch {checked} on:change={changeWcSwitch}>
  Switch in Svelte ({checked})
</wc-switch>

<wc-switch {checked} disabled on:change={changeWcSwitch} />

<div>
  <a href="/" use:link>Home</a> /
  <a href="/text-field" use:link>Text Field</a>
</div>

<Router routes={router} />
