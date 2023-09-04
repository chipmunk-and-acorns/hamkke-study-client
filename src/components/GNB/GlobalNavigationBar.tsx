import { Box } from '@mui/material';

import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

const GlobalNavigationBar = () => {
  return (
    <Box sx={ContainerStyle}>
      <nav>
        <LeftMenu />
        <RightMenu />
      </nav>
    </Box>
  );
};

const ContainerStyle = {
  width: '100%',
  py: '1rem',
  px: '4rem',

  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export default GlobalNavigationBar;
