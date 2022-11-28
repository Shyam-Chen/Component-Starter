import { wrap } from 'svelte-spa-router/wrap';

export default {
  '/text-field': wrap({
    asyncComponent: () => import('~/modules/text-field/TextField.svelte'),
  }),
};
