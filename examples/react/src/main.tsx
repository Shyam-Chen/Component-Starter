import { render } from 'preact';
import { RouterProvider } from 'react-router-dom';

import router from '~/plugins/router';

render(<RouterProvider router={router} />, document.getElementById('root') as HTMLElement);
