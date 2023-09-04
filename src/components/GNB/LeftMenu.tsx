import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { images } from '../../utils/importImageUrl';

const LeftMenu = () => {
  return (
    <Box>
      <Link to="/">
        <img src={images.logo} alt="hamkke site logo" title="홈으로 이동하기" />
      </Link>
    </Box>
  );
};

export default LeftMenu;
