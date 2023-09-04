import { Container, Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { images } from '../../utils/importImageUrl';
import theme from '../../styles/theme';

const Footer = () => {
  return (
    <Container sx={ContainerStyle}>
      <footer>
        <Box sx={LeftBoxStyle}>
          <img src={images.logo} alt="main logo image" />
          <Typography variant="subtitle2" component="p">
            온라인/오프라인 스터디 모집을 위한 커뮤니티 서비스 함께입니다.
          </Typography>
        </Box>
        <Box sx={RightBoxStyle}>
          <List>
            <ListItem>
              <ListItemText>이용약관</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>개인정보 처리방침</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>서비스 소개</ListItemText>
            </ListItem>
          </List>
        </Box>
      </footer>
    </Container>
  );
};

const ContainerStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  minWidth: '100%',
  height: '150px',
  display: 'flex',
  backgroundColor: theme.customPalette.grey[100],

  footer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
};

const LeftBoxStyle = {
  width: '35%',

  img: {
    pb: '1rem',
  },
  p: {
    color: theme.palette.grey[700],
  },
};

const RightBoxStyle = {
  ul: {
    display: 'flex',
    alignItems: 'center',
    pt: '3rem',

    li: {
      width: '150px',
      span: {
        color: theme.palette.grey[800],
        fontWeight: 'bold',
        cursor: 'pointer',
      },
    },
  },
};

export default Footer;
