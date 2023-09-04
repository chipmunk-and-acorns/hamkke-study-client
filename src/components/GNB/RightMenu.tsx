import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import { CreateRounded, LoginRounded } from '@mui/icons-material';

import { images } from '../../utils/importImageUrl';
import DropdownMenu from './DropdownMenu';

const RightMenu = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);

  const renderMenu = () => {
    if (isLogin) {
      return (
        <ListItem onClick={handleModalMenuControl}>
          <Avatar src={images.profileImage1} alt="user profile image" />
        </ListItem>
      );
    } else {
      return (
        <ListItem>
          <Link to="/login">
            <ListItemIcon>
              <LoginRounded />
            </ListItemIcon>
            <ListItemText primary="로그인" />
          </Link>
        </ListItem>
      );
    }
  };

  const handleModalMenuControl = () => {
    setIsModalMenuOpen((prev) => !prev);
  };

  return (
    <Box sx={ContainerStyle}>
      <List>
        <ListItem>
          <Link to="/write">
            <ListItemIcon>
              <CreateRounded />
            </ListItemIcon>
            <ListItemText primary="새 글 쓰기" />
          </Link>
        </ListItem>
        {renderMenu()}
      </List>
      {isModalMenuOpen && <DropdownMenu handleModalMenuControl={handleModalMenuControl} />}
    </Box>
  );
};

const ContainerStyle = {
  width: '20rem',

  ul: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  'li a': {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  'li div:first-child': {
    minWidth: '2rem',
  },

  img: {
    cursor: 'pointer',
  },
};

export default RightMenu;
