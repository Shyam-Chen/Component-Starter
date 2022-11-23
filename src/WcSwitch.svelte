<svelte:options tag="wc-switch" />

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import uniqueId from 'lodash/uniqueId';

  export let checked: boolean = false;

  const uid = uniqueId('wc-switch-');

  const svelteDispatch = createEventDispatcher();
  const component = get_current_component();

  const dispatch = (name: string, detail: CustomEvent['detail']) => {
    svelteDispatch(name, detail);
    component?.dispatchEvent(new CustomEvent(name, { detail }));
  };

  function onChange() {
    dispatch('change', { checked });
    dispatch('Change', { checked });
  }
</script>

<div class="flex items-center">
  <label for={uid} class="flex items-center cursor-pointer">
    <div class="relative">
      <input
        id={uid}
        {...$$restProps}
        {checked}
        type="checkbox"
        class="sr-only"
        on:change={onChange}
      />

      <div
        class="block w-14 h-8 rounded-full"
        class:bg-blue-600={checked}
        class:bg-gray-400={!checked}
      />

      <div
        class="dot absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition"
        class:translate-x-full={checked}
      />
    </div>

    <div class="toggle-switch-label ml-2 text-gray-700 font-medium">
      <slot />
    </div>
  </label>
</div>

<style>
  @unocss-placeholder;

  .toggle-switch-label:empty {
    display: none;
  }
</style>
