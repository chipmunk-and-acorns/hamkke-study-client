import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import { CreateRounded, LoginRounded } from '@mui/icons-material';

import { images } from '../../utils/importImageUrl';

const RightMenu = () => {
  const [isLogin, setIsLogin] = useState(false);

  // 로그인 전: 새 글 쓰기/로그인
  // 로그인 후: 새 글 쓰기/알림/프로필 사진(드롭다운 메뉴)
  const renderMenu = () => {
    if (isLogin) {
      return (
        <ListItem>
          <Link to="/">
            <Avatar src={images.profileImage1} alt="user profile image" />
          </Link>
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
};

export default RightMenu;
