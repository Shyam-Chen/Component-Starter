# Component Starter

:carousel_horse: A boilerplate for Web Components to help build microservices.

## Usage

```sh
$ yarn install

$ yarn serve
$ yarn storybook
```

## Git

```sh
$ git clone https://github.com/Shyam-Chen/Component-Starter app-components
$ cd app-components
```

```ts
.
├── app-components
└── <PROJECT_NAME>
```

```js
{
  "name": "<PROJECT_NAME>",
  "scripts": {
    "postinstall": "cpx \"../app-components/dist/**/*\" ./node_modules"
  }
}
```

```js
import 'soft-shape';
```

```html
<soft-shape></soft-shape>
```

## Npm

```sh
$ lerna publish
```
