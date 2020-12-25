# Component Starter

:carousel_horse: A boilerplate for Web Components to help build microservices.

## Create Web Components

```sh
$ git clone https://github.com/Shyam-Chen/Component-Starter app-components
$ cd app-components

$ yarn install
$ yarn serve
```

## Install in Projects

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

```sh
$ pwd
# path/to/<PROJECT_NAME>

$ yarn install
```

```js
import 'app-components/soft-shape';
```

```html
<soft-shape></soft-shape>
```
