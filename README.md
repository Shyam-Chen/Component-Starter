# Component Starter

:carousel_horse: A boilerplate for Web Components to help build microservices.

## Create Web Components

```sh
$ git clone --depth=1 https://github.com/Shyam-Chen/Component-Starter awesome-components
$ cd awesome-components
$ pnpm install
```

## Install in Projects

```ts
.
├── awesome-components
└── <PROJECT_NAME>
```

```js
{
  "name": "<PROJECT_NAME>",
  "dependencies": {
    "awesome-components": "../awesome-components"
  }
}
```

## Examples

- [Vue](./examples/vue)
- [Svelte](./examples/svelte)
- [Preact](./examples/preact)
- ~~React~~ (Not friendly to Web Components)
- ~~Angular~~ (Too much own build specific configuration)
