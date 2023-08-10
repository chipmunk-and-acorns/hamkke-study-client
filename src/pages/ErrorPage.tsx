import { Container, Typography } from '@mui/material';

import { images } from '../utils/importImageUrl';

const ErrorPage = () => {
  return (
    <Container maxWidth="xs" sx={{ transform: 'translate(10%, 50%)', height: '50vh' }}>
      <img src={images._404ErrorPage} alt="페이지를 찾을 수 없습니다." />
      <Typography
        variant="subtitle1"
        component="h5"
        sx={{ textAlign: 'center', fontWeight: 'bold' }}
      >
        요청하신 페이지가 존재하지 않습니다.
      </Typography>
    </Container>
  );
};

export default ErrorPage;
