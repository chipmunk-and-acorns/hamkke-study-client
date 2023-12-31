import { Link, useNavigate } from 'react-router-dom';
import { Box, List, ListItem, ListItemText } from '@mui/material';

import theme from '../../styles/theme';
import { postLogout } from '../../api/userApi';
import { PathName } from '../../types/routerPath';

interface IProps {
  handleModalMenuControl: () => void;
}

const DropdownMenu = ({ handleModalMenuControl }: IProps) => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');

  const handleLogout = async () => {
    if (accessToken) {
      const res = await postLogout(accessToken);

      if (res.status === 204) {
        localStorage.removeItem('accessToken');
        navigate(PathName.Home);
        handleModalMenuControl();
      }
    }
  };

  return (
    <>
      <Box sx={ModalBackDrop} onClick={handleModalMenuControl} />
      <Box sx={ModalStyle}>
        <button onClick={handleModalMenuControl}>X</button>
        <List>
          <ListItem>
            <Link to="/articles">
              <ListItemText>내 작성글</ListItemText>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/mypage">
              <ListItemText>내 정보 설정</ListItemText>
            </Link>
          </ListItem>
          <ListItem>
            <ListItemText onClick={handleLogout}>로그아웃</ListItemText>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

const ModalBackDrop = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
};

const ModalStyle = {
  position: 'absolute',
  right: '8rem',
  py: '1rem',
  px: '2rem',
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,

  button: {
    position: 'absolute',
    border: 'none',
    backgroundColor: theme.palette.grey[100],
    color: theme.customPalette.grey[700],
    fontWeight: 'bold',
    right: 7,
    top: 10,
  },
  'button:hover': {
    cursor: 'pointer',
  },

  ul: {
    display: 'flex',
    flexDirection: 'column',
    mt: '0.5rem',

    li: {
      padding: '0rem',
      span: {
        fontWeight: 'bold',
        color: theme.customPalette.grey[700],
        cursor: 'pointer',
      },
    },
  },
};

export default DropdownMenu;
