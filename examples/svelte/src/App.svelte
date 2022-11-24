<script lang="ts">
  import { register, WcHello, WcSwitch } from 'awesome-components';

  register(WcHello, WcSwitch);

  let text = '';

  const helloClick = (event: CustomEvent) => {
    text = event.detail.helloText;
  };

  let checked = false;

  const changeWcSwitch = (event: CustomEvent) => {
    checked = !event.detail.checked;
  };
</script>

<wc-hello hello-text="Hello Svelte" on:hello-click={helloClick}>
  ({text})
</wc-hello>

<wc-switch {checked} on:change={changeWcSwitch}>
  Switch in Svelte ({checked})
</wc-switch>

<wc-switch {checked} disabled on:change={changeWcSwitch}></wc-switch>
