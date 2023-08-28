import { Link } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';

import { images } from '../utils/importImageUrl';

const ErrorPage = () => {
  return (
    <Container maxWidth="sm" sx={{ transform: 'translate(10%, 40%)' }}>
      <Link to="/">
        <img src={images.logo} alt="go to hamkke study home" title="홈으로 이동하기" />
      </Link>
      <Box sx={{ py: '3rem' }}>
        <img src={images._404ErrorPage} alt="페이지를 찾을 수 없습니다." />
      </Box>
      <Typography variant="subtitle1" component="h5" sx={ErrorInfoPhraseStyle}>
        죄송합니다.
      </Typography>
      <Typography variant="subtitle1" component="h5" sx={ErrorInfoPhraseStyle}>
        요청하신 페이지를 찾을 수 없습니다.
      </Typography>
      <Typography variant="subtitle2" component="h6">
        방문하시려는 페이지의 주소가 잘못 입력되었거나, <br />
        페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
      </Typography>
      <Typography variant="subtitle2" component="h6">
        입력하신 주소가 정확한지 다시 한 번 확인해주시기 바랍니다.
      </Typography>
    </Container>
  );
};

const ErrorInfoPhraseStyle = {
  textAlign: 'left',
  fontWeight: 'bold',
};

export default ErrorPage;
