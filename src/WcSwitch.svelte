<svelte:options tag={null} />

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { get_current_component } from 'svelte/internal';
  import uniqueId from 'lodash/uniqueId';

  export let checked = false;
  export let disabled = false;

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
  <label
    for={uid}
    class="flex items-center"
    class:cursor-pointer={!disabled}
    class:opacity-50={disabled}
  >
    <div class="relative" class:cursor-not-allowed={disabled}>
      <input id={uid} {checked} {disabled} type="checkbox" class="sr-only" on:change={onChange} />

      <div class="w-14 h-8 rounded-full" class:bg-blue-600={checked} class:bg-gray-400={!checked} />

      <div
        class="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition"
        class:translate-x-full={checked}
      />
    </div>

    <div class="text-gray-700 ml-2">
      <slot />
    </div>
  </label>
</div>

<style lang="scss">
  @unocss-placeholder;
</style>
