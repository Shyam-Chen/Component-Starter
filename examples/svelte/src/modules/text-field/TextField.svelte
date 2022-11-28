<script lang="ts">
  import { register, LeTextField, SeTextField } from 'awesome-components';

  register(LeTextField, SeTextField);

  const flux = {
    text: '',
    inputText(event: Event) {
      flux.text = (event.target as HTMLInputElement).value;
    },
  };
</script>

<le-text-field value={flux.text} on:input={flux.inputText} />

<se-text-field value={flux.text} on:input={flux.inputText} />

{flux.text}
