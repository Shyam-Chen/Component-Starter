<svelte:options tag="se-text-field" />

<script lang="ts">
  export let type = 'text';
  export let value = '';

  function onInput(event: Event) {
    value = (event.target as HTMLInputElement).value;
  }
</script>

<input
  {type}
  class="box-border appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
  {value}
  on:input={onInput}
/>

<style lang="scss">
  @unocss-placeholder;
</style>
