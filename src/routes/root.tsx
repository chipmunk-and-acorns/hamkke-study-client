import { Outlet, useLocation } from 'react-router-dom';

import { PathName } from '../types/routerPath';
import GNB from '../components/GNB/GlobalNavigationBar';

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
