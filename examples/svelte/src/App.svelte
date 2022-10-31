<script lang="ts">
  import { SimpleGreeting, MyButton } from '../../../dist/awesome-components';

  import Foo from './Foo.svelte';

  let myLabel: string = '';

  const myClick = (event) => {
    console.log(event);
    myLabel = event.detail.label;
  };
</script>

<simple-greeting name="World"></simple-greeting>
<Foo />

<my-button on:myClick={myClick}>My Click</my-button>
{myLabel}
