import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { App } from '~/App';

const TextField = React.lazy(() => import('~/modules/text-field/TextField'));

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/text-field',
        element: (
          <React.Suspense>
            <TextField />
          </React.Suspense>
        ),
      },
    ],
  },
]);
