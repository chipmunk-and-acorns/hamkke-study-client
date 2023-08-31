import { Outlet, useLocation } from 'react-router-dom';

import GNB from '../components/GNB/GlobalNavigationBar';

const Root = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/register' && pathname !== '/login' && <GNB />}
      <Outlet />
    </>
  );
};

export default Root;
