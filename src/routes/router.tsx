import { createBrowserRouter } from 'react-router-dom';

import Root from './root';
import { PathName } from '../types/routerPath';
import Main from '../pages/Main';
import SignUp from '../pages/User/SignUp';
import ErrorPage from '../pages/ErrorPage';
import SignIn from '../pages/User/SignIn';

export const router = createBrowserRouter([
  {
    path: PathName.Home,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: PathName.Home,
        element: <Main />,
      },
      {
        path: PathName.Register,
        element: <SignUp />,
      },
      {
        path: PathName.Login,
        element: <SignIn />,
      },
    ],
  },
]);
