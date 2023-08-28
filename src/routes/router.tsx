import { createBrowserRouter } from 'react-router-dom';

import Root from './root';
import Main from '../pages/Main';
import SignUp from '../pages/User/SignUp';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
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
