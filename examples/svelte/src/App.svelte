<script lang="ts">
  import { register, SimpleGreeting, MyButton } from 'awesome-components';

  import Foo from './Foo.svelte';

  register(SimpleGreeting, MyButton);

  let myLabel = '';

  const myClick = (event: CustomEvent) => {
    console.log(event);
    myLabel = event.detail.label;
  };
</script>

<simple-greeting name="World"></simple-greeting>
<Foo />

<my-button my-label="My Button (Svelte)" on:my-click={myClick}></my-button>
{myLabel}
