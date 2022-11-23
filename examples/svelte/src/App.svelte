<script lang="ts">
  import { register, WcSwitch } from 'awesome-components';

  register(WcSwitch);

  let checked = false;

  const changeWcSwitch = (event: CustomEvent) => {
    checked = !event.detail.checked;
  };
</script>

<wc-switch {checked} on:change={changeWcSwitch}>Switch in Svelte</wc-switch>
