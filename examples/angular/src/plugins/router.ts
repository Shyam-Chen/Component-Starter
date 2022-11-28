import type { Routes } from '@angular/router';

export default [
  {
    path: 'text-field',
    loadComponent: () => import('../modules/text-field/text-field.component').then((mod) => mod.TextFieldComponent),
  },
] as Routes;
