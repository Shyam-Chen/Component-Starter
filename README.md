# Component Starter

:carousel_horse: A boilerplate for Web Components to help build microservices development.

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
    "awesome-components": "link:../awesome-components"
  }
}
```

## Examples

- [Vue](./examples/vue)
- [Svelte](./examples/svelte)
- [React](./examples/react)
- [Angular](./examples/angular)

```sh
$ pnpm install
$ pnpm build

$ cd examples/vue
$ cd examples/svelte
$ cd examples/react
$ cd examples/angular

$ pnpm install
$ pnpm dev
```
