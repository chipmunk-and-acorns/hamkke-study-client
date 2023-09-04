import { Outlet, useLocation } from 'react-router-dom';

import GNB from '../components/GNB/GlobalNavigationBar';

enum PathName {
  Register = '/register',
  Login = '/login',
}

const Root = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== PathName.Register && pathname !== PathName.Login && <GNB />}
      <Outlet />
    </>
  );
};

export default Root;
