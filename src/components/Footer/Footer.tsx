import { MouseEvent, useState } from 'react';
import { Container, Box, Typography, List, ListItem, ListItemText } from '@mui/material';

import { images } from '../../utils/importImageUrl';
import theme from '../../styles/theme';
import TermsOfUseModal from '../../pages/TermsOfUse';
import PrivacyPolicy from '../../pages/PrivacyPolicy';

type TermsState = {
  [key: string]: boolean;
};

const Footer = () => {
  const [terms, setTerms] = useState<TermsState>({ termsOfUse: false, privacyPolicy: false });

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (e.currentTarget.id) {
      setTerms({ ...terms, [e.currentTarget.id]: !terms[e.currentTarget.id] });
    }
  };

  return (
    <>
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
              <ListItem id="termsOfUse" onClick={(e: MouseEvent<HTMLElement>) => handleClick(e)}>
                <ListItemText>이용약관</ListItemText>
              </ListItem>
              <ListItem id="privacyPolicy" onClick={(e: MouseEvent<HTMLElement>) => handleClick(e)}>
                <ListItemText>개인정보 처리방침</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>서비스 소개</ListItemText>
              </ListItem>
            </List>
          </Box>
        </footer>
      </Container>
      {terms.termsOfUse && (
        <TermsOfUseModal handleClick={() => setTerms({ ...terms, termsOfUse: false })} />
      )}
      {terms.privacyPolicy && (
        <PrivacyPolicy handleClick={() => setTerms({ ...terms, privacyPolicy: false })} />
      )}
    </>
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
  width: '35%',
  ul: {
    display: 'flex',
    alignItems: 'center',
    pt: '3rem',

    li: {
      textAlign: 'center',
      span: {
        width: '130px',
        color: theme.palette.grey[800],
        fontWeight: 'bold',
        cursor: 'pointer',
      },
    },
  },
};

export default Footer;
