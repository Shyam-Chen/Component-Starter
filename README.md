# Component Starter

:carousel_horse: A boilerplate for Web Components to help build microservices.

## Usage

```sh
$ git clone https://github.com/Shyam-Chen/Component-Starter app-components
$ cd app-components

$ yarn install
$ yarn serve
```

## Install in projects

```sh
$ git clone https://github.com/Shyam-Chen/Component-Starter app-components
$ cd app-components

$ yarn install
$ yarn build
```

```ts
.
├── app-components
└── <PROJECT_NAME>
```

```js
{
  "name": "<PROJECT_NAME>",
  "dependencies": {
    "app-components": "file:../app-components"
  }
}
```

```js
import 'app-components/soft-shape';
```

```html
<soft-shape></soft-shape>
```
