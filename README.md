# Component Starter

```sh
$ yarn install
$ yarn build
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

private packages
