<svelte:options tag="se-checkbox" />

<script lang="ts">
  import { get_current_component } from 'svelte/internal';

  export let checked = false;

  const component = get_current_component();

  function onChange(event: Event) {
    checked = (event.target as HTMLInputElement).checked;
    component?.dispatchEvent(new CustomEvent('change', event));
  }
</script>

<input type="checkbox" {checked} on:change={onChange} />

<style lang="scss">
  @unocss-placeholder;
</style>
