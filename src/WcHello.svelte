<svelte:options tag={null} />

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { get_current_component } from 'svelte/internal';

  export let helloText = '';

  const svelteDispatch = createEventDispatcher();
  const component = get_current_component();

  const dispatch = (name: string, detail: CustomEvent['detail']) => {
    svelteDispatch(name, detail);
    component?.dispatchEvent(new CustomEvent(name, { detail }));
  };

  function onClick() {
    dispatch('hello-click', { helloText });
    dispatch('helloClick', { helloText });
    dispatch('HelloClick', { helloText });
  }
</script>

<button
  type="button"
  class="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800"
  on:click={onClick}
>
  {helloText}
  <slot />
</button>

<style>
  @unocss-placeholder;
</style>
