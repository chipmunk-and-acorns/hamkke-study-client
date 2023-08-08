import { createBrowserRouter } from 'react-router-dom';

import Root from './root';
import Main from '../pages/Main';
import SignUp from '../pages/User/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>Something Wrong ...</div>,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/register',
        element: <SignUp />,
      },
    ],
  },
]);
